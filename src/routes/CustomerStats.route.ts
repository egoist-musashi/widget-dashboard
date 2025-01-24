import express from "express";
import * as CustomerStatsController from "../controllers/CustomerStats.controller";

const router = express.Router();
router.get("/", CustomerStatsController.getCustomerStats);

export default router;