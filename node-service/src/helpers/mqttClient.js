import mqtt from "mqtt";

const mqttHelper = {
  connect: () => {
    const client = mqtt.connect(process.env.MQTT_URL);
    return client;
  },
};

export default mqttHelper;
