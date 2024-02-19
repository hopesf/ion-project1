import { Router } from "express";
import deviceController from "../../controllers/device/index.js";

const router = Router();

router.get("/all", deviceController.getAllDevices);

export default router;
