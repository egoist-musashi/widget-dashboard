import express from "express";
import * as SandController from "../controllers/Sand.controller";

const router = express.Router();

router.post("/", SandController.createSand);
router.get("/", SandController.getAllSand);
router.get("/:id", SandController.getSandById);
router.put("/:id", SandController.updateSand);
router.delete("/:id", SandController.deleteSand);

export default router;
