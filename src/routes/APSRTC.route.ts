import express from "express";
import * as APSRTCController from "../controllers/APSRTC.controller";

const router = express.Router();

router.post("/", APSRTCController.createAPSRTC);
router.get("/", APSRTCController.getAllAPSRTC);
router.get("/:id", APSRTCController.getAPSRTCById);
router.put("/:id", APSRTCController.updateAPSRTC);
router.delete("/:id", APSRTCController.deleteAPSRTC);

export default router;
