import express from "express";
import * as PensionController from "../controllers/Pension.controller";

const router = express.Router();

router.post("/", PensionController.createPension);
router.get("/", PensionController.getAllPension);
router.get("/:id", PensionController.getPensionById);
router.put("/:id", PensionController.updatePension);
router.delete("/:id", PensionController.deletePension);

export default router;
