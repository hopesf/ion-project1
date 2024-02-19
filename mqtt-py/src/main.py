from mqtt_client import MqttClient

if __name__ == '__main__':
    currentDeviceId = "2"
    topic = f"topic/device/{currentDeviceId}"
    client = MqttClient(currentDeviceId, topic)
    client.run()