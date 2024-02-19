import { Router } from "express";

const router = Router();
import deviceRouter from "./device/index.js";

router.get("/", (req, res) => {
  res.send("Hello, world!");
});

router.use("/device", deviceRouter);

export default router;
