import express from "express";
import * as CustomerController from "../controllers/Customers.controller";

const router = express.Router();

router.post("/", CustomerController.createCustomers);
router.get("/", CustomerController.getALlCustomers);
router.get("/:id", CustomerController.getCustomerById);
router.put("/:id", CustomerController.updateCustomer);
router.delete("/:id", CustomerController.deleteCustomer);

export default router;