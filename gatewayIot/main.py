import serial.tools.list_ports
import random
import time
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
            client.publish(splitData[1], splitData[2])
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