import express from "express";
import * as FertilizersController from "../controllers/Fertilizers.controller";

const router = express.Router();

router.post("/", FertilizersController.createFertilizers);
router.get("/", FertilizersController.getAllFertilizers);
router.get("/:id", FertilizersController.getFertilizersById);
router.put("/:id", FertilizersController.updateFertilizers);
router.delete("/:id", FertilizersController.deleteFertilizers);

export default router;
