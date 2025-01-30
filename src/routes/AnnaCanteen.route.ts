import express from "express";
import * as AnnaCanteenController from "../controllers/AnnaCanteen.controller"

const router = express.Router();

router.post("/", AnnaCanteenController.createAnnaCanteen);
router.get("/", AnnaCanteenController.getAllAnnaCanteen);
router.get("/:id", AnnaCanteenController.getAnnaCanteenById);
router.put("/:id", AnnaCanteenController.updateAnnaCanteen);
router.delete("/:id", AnnaCanteenController.deleteAnnaCanteen);

export default router;
