import express from "express";
import {getCounts} from "../controllers/Counts.controller";

const router = express.Router();

// Define the route for getting counts
router.get("/:tableName", getCounts);

export default router;
