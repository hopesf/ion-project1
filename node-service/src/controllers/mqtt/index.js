import mqttHelper from "../../helpers/mqttClient.js";
import device from "../../functions/device.js";
import { io } from "../../app.js";

const client = mqttHelper.connect();

client.on("connect", () => {
  console.log("Connected to MQTT broker");
  client.subscribe("topic/device/#");
});

client.on("message", async (topic, message) => {
  const messageResult = JSON.parse(message.toString());
  console.log(messageResult);
  await device.makeAction(messageResult);
  io.emit("device", messageResult);
});

const mqttController = {
  client, // Export the client for reuse if necessary
};

export default mqttController;
