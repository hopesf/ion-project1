import { Schema, model } from "mongoose";

// Schema
const devicesSchema = new Schema(
  {
    deviceId: String,
    deviceName: String,
    createDate: String,
  },
  {
    collection: "Devices",
    versionKey: false,
  }
);

const Devices = model("Devices", devicesSchema);
export default Devices;
