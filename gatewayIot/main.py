import serial.tools.list_ports
import time
from datetime import datetime
import pytz
import json
import sys
import requests
from  Adafruit_IO import  MQTTClient

ADAFRUIT_IO_FEEDID = ["DOME", "LIGHT-SENSOR", "PUMP", "SOIL-MOISTURE-SENSOR", "TEMP-SENSOR"]
ADAFRUIT_IO_USERNAME = "hbngo21"
ADAFRUIT_IO_KEY = "aio_tWnv46UnSeETBGuPzyBpun2r4w3S"
API_BASE_URL = "http://localhost:5000/api"

DEVICE_IN_DB = {
    "DOME": "dome", 
    "LIGHT-SENSOR": "light_value", 
    "PUMP": "pump", 
    "SOIL-MOISTURE-SENSOR": "moisture_value", 
    "TEMP-SENSOR": "temp_value"
}

def connected(client):
    print("Connect Successfully...")
    for feed_id in ADAFRUIT_IO_FEEDID:
        client.subscribe(feed_id)

def subscribe(client, userdata, mid, granted_qos):
    print("Subscribe Successfully.")

def disconnected(client):
    print("Disconnect.")
    sys.exit(1)

def message(client, feed_id, payload):
    print("Receive Data: " + payload)
    if isMicrobitConnected:
        ser.write((str(payload) + "#").encode())

client = MQTTClient(ADAFRUIT_IO_USERNAME , ADAFRUIT_IO_KEY)
client.on_connect = connected
client.on_disconnect = disconnected
client.on_message = message
client.on_subscribe = subscribe
client.connect()
client.loop_background()

def getPort():
    return "COM4"
    # ports = serial.tools.list_ports.comports()
    # N = len(ports)
    # commPort = "None"
    # for i in range(0, N):
    #     port = ports[i]
    #     strPort = str(port)
    #     if "USB Serial Device" in strPort:
    #         splitPort = strPort.split(" ")
    #         commPort = (splitPort[0])
    # return commPort

isMicrobitConnected = False
if getPort() != "None":
    ser = serial.Serial( port=getPort(), baudrate=115200)
    isMicrobitConnected = True


def processData(data):
    data = data.replace("!", "")
    data = data.replace("#", "")
    splitData = data.split(":")
    print(splitData)
    try:
        if splitData[1] in ADAFRUIT_IO_FEEDID:
            client.publish(splitData[1], splitData[2])
            url = API_BASE_URL + "/adafruit/send"
            payload = {
                "plotId": splitData[0],
                "name": DEVICE_IN_DB[splitData[1]],
                "value": splitData[2]
            }
            headers = {
                "Content-Type": "application/json",
                "Authorization": "Bearer "
            }
            requests.post(url, data=json.dumps(payload), headers=headers)
            url = API_BASE_URL + "/plot/" + splitData[0]
            data = requests.get(url).json()
            # Control pump
            if ((data['moisture_value'] < data['moisture_check'] and data['pump'] == 0) or (data['moisture_value'] > data['moisture_check'] and data['pump'] == 1)):
                url = API_BASE_URL + "/adafruit/send"
                payload = {
                    "plotId": splitData[0],
                    "name": 'pump',
                    "value": 1 if data['pump'] == 0 else 0
                }
                requests.post(url, data=json.dumps(payload), headers=headers)
                client.publish("PUMP", 1 if data['pump'] == 0 else 0)
                # Save into history
                url = API_BASE_URL + "/history/save"
                payload = {
                    "plotID": splitData[0],
                    "device": 'pump',
                    "timestamp": datetime.now(pytz.timezone('Asia/Ho_Chi_Minh')).strftime("%d/%m/%Y %H:%M:%S"),
                    "status": "Open" if data['pump'] == 0 else "Close",
                    "user": "auto",
                    "success": True
                }
                requests.post(url, data=json.dumps(payload), headers=headers)

            # Control dome
            if ((data['temp_value'] > data['temp_check'] and data['dome'] == 0) or (data['light_value'] > data['light_check'] and data['dome'] == 0) or
            (data['temp_value'] < data['temp_check'] and data['light_value'] < data['light_check'] and data['dome'] == 1)):
                url = API_BASE_URL + "/adafruit/send"
                payload = {
                    "plotId": splitData[0],
                    "name": 'dome',
                    "value": 1 if data['dome'] == 0 else 0
                }
                requests.post(url, data=json.dumps(payload), headers=headers)
                client.publish("DOME", 1 if data['dome'] == 0 else 0)
                # Save into history
                url = API_BASE_URL + "/history/save"
                payload = {
                    "plotID": splitData[0],
                    "device": 'dome',
                    "timestamp": datetime.now(pytz.timezone('Asia/Ho_Chi_Minh')).strftime("%d/%m/%Y %H:%M:%S"),
                    "status": "Open" if data['dome'] == 0 else "Close",
                    "user": "auto",
                    "success": True
                }
                requests.post(url, data=json.dumps(payload), headers=headers)
    except:
        pass

mess = ""
def readSerial():
    bytesToRead = ser.inWaiting()
    if (bytesToRead > 0):
        global mess
        mess = mess + ser.read(bytesToRead).decode("UTF-8")
        while ("#" in mess) and ("!" in mess):
            start = mess.find("!")
            end = mess.find("#")
            processData(mess[start:end + 1])
            if (end == len(mess)):
                mess = ""
            else:
                mess = mess[end+1:]

while True:
    if isMicrobitConnected:
        readSerial()

    time.sleep(1)