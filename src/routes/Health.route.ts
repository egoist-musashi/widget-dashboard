import express from "express";
import * as HealthController from "../controllers/Health.controller";

const router = express.Router();

router.post("/", HealthController.createHealth);
router.get("/", HealthController.getAllHealth);
router.get("/:id", HealthController.getHealthById);
router.put("/:id", HealthController.updateHealth);
router.delete("/:id", HealthController.deleteHealth);

export default router;
