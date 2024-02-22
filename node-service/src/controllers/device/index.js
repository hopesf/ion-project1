import Devices from "../../models/Devices.js";

const getAllDevices = async (_req, res) => {
  const result = await Devices.find();
  res.send(result);
};

const deviceController = { getAllDevices };
export default deviceController;
