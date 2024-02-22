import { Router } from "express";

const router = Router();
import deviceRouter from "./device/index.js";

router.get("/", (_req, res) => res.send("Hello, world!"));
router.use("/device", deviceRouter);

export default router;
