import express from "express";
import * as DeepamController from "../controllers/Deepam.controller";

const router = express.Router();

router.post("/", DeepamController.createDeepam);
router.get("/", DeepamController.getAllDeepam);
router.get("/:id", DeepamController.getDeepamById);
router.put("/:id", DeepamController.updateDeepam);
router.delete("/:id", DeepamController.deleteDeepam);

export default router;
