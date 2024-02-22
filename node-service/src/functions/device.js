import Devices from "../models/Devices.js";

const checkDeviceExist = async (deviceId) => {
  const result = await Devices.findOne({ deviceId });
  return !!result;
};

const createNewDevice = async ({ deviceId, deviceName, createDate }) => {
  const device = new Devices({ deviceId, deviceName, createDate });
  return await device.save();
};

const updateDevice = async (deviceId, deviceName) => {
  const result = await Devices.findOneAndUpdate({ deviceId }, { deviceName }, { upsert: true });
  return result;
};

const makeAction = async ({ deviceId, deviceName, createDate }) => {
  const isExist = await checkDeviceExist(deviceId);
  if (isExist) {
    return await updateDevice(deviceId, deviceName);
  }
  return await createNewDevice({ deviceId, deviceName, createDate });
};

const device = {
  checkDeviceExist,
  createNewDevice,
  updateDevice,
  makeAction,
};

export default device;
