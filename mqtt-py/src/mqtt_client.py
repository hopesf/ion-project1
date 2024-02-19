import paho.mqtt.client as mqtt
import sys
import time
import random

topic = "topic/device"

class MqttClient:
    def __init__(self, currentDeviceId, topic):
        self.currentDeviceId = currentDeviceId
        self.topic = topic
        self.client = mqtt.Client()
        self.client.on_connect = self.on_connect
        self.client.on_message = self.on_message

        if self.client.connect("localhost", 1883, 60) != 0:
            print("Could not connect to MQTT broker")
            sys.exit(-1)
        
        self.client.loop_start()
    
    def on_connect(self, client, userdata, flags, rc):
        print("Connected with result code "+str(rc))
        client.subscribe(self.topic)

    def on_message(self, client, userdata, msg):
        print(msg.topic+" "+str(msg.payload))
    
    def run(self):
        while True:
            print('Python client is working..')
            self.getData()
            time.sleep(20)
    
    def getData(self):
        devices = [
            {"deviceID": "1", "createDate": "2024-02-16"},
            {"deviceID": "2", "createDate": "2024-02-15"},
            {"deviceID": "3", "createDate": "2024-02-14"}
        ]
        for device in devices:
            if device["deviceID"] == self.currentDeviceId:
                deviceID = device["deviceID"]
                deviceName = f"device-{random.randint(100000, 999999)}"
                createDate = device["createDate"]
                message = f'{{"deviceId":"{deviceID}","deviceName":"{deviceName}","createDate":"{createDate}"}}'
                self.client.publish(self.topic, message)

                print(f"Message published: {message}")
                break