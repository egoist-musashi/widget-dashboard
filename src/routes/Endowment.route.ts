import express from "express";
import * as EndowmentController from "../controllers/Endowment.controller";

const router = express.Router();

router.post("/", EndowmentController.createEndowment);
router.get("/", EndowmentController.getAllEndowment);
router.get("/:id", EndowmentController.getEndowmentById);
router.put("/:id", EndowmentController.updateEndowment);
router.delete("/:id", EndowmentController.deleteEndowment);

export default router;
