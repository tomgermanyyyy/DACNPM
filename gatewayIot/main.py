import serial.tools.list_ports
import json
import sys
import requests
import time
from Adafruit_IO import MQTTClient

AIO_FEED_ID = ["dome", "light-sensor", "pumb", "soil-moisture-sensor", "temp-sensor"]
AIO_USERNAME = "hbngo21"
AIO_KEY = "aio_tWnv46UnSeETBGuPzyBpun2r4w3S"
API_BASE_URL = "http://localhost:5000/api"

MAP_DEVICE_TO_NAME_STORE_AS_DB = {
    "dome": "led",
    "pump": "pump",
    "temp-sensor": "temp_value",
    "soil-moisture-sensor": "moisture_value",
    "light-sensor": "light_value"
}

def connected(client):
    print("Connect Successfully...")
    for feed_id in AIO_FEED_ID:
        client.subscribe(feed_id)

def subscribe(client, userdata, mid, granted_qos):
    print("Subscribe Successfully.")

def disconnected(client):
    print("Disconnect.")
    sys.exit(1)

def message(client, feed_id, payload):
    print("Receive Data: " + payload)
    if microbit_connected:
        ser.write((str(payload) + "#").encode())

# Find COM port when there are only one Microbit board connected with the system.
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
    #         commPort = splitPort[0]
    # return commPort

# Data decomposition function from format "!1:TEMP:xx#"
def processData(data):
    data = data.replace("!", "")
    data = data.replace("#", "")
    splitData = data.split(":")
    print(splitData)
    if splitData[1] in AIO_FEED_ID:
        # data : id-value
        url = API_BASE_URL + "/adafruit/send-data"
        payload = {
            "productId": splitData[0],
            "value": splitData[2],
            "device": MAP_DEVICE_TO_NAME_STORE_AS_DB[splitData[1]]
        }
        headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer "
        }
        requests.post(url, data=json.dumps(payload), headers=headers)

        client.publish(splitData[1], splitData[0] + "-" + splitData[2])
    #client.publish(splitData[1], splitData[2])

# Serial reading function
mess = ""
def readSerial():
    bytesToRead = ser.inWaiting()
    if bytesToRead > 0:
        global mess
        mess = mess + ser.read(bytesToRead).decode("UTF-8")
        while "#" in mess and "!" in mess:
            start = mess.find("!")
            end = mess.find("#")
            processData(mess[start:end + 1])
            if end == len(mess):
                mess = ""
            else:
                mess = mess[end + 1:]

microbit_connected = False
if getPort():
    ser = serial.Serial(port=getPort(), baudrate=115200)
    microbit_connected = True

client = MQTTClient(AIO_USERNAME, AIO_KEY)
client.on_connect = connected
client.on_disconnect = disconnected
client.on_message = message
client.on_subscribe = subscribe
client.connect()
client.loop_background()

while True:
    if microbit_connected:
        readSerial()
    time.sleep(1)

