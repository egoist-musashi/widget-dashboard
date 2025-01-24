import {Request, Response} from "express";
import Customer from "../models/Customers";

export const createCustomers = async (req: Request, res: Response) => {
    try {
        const { mobile_number, attributes } = req.body;
        const customer = await Customer.create({ mobile_number, attributes });
        // const createdCustomer = await Customer.findOne({where: {id: customer.id}});
        res.status(201).json(customer);
    } catch (err) {
        console.error("Error creating customer:", err);
        res.status(500).json({ message: "Error creating customer" });
    }
};


export const getCustomerById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findByPk(id);
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(404).json({ message: "No customer found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting customer" });
    }
};


export const getALlCustomers = async (req: Request, res: Response) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json(customers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting customers" });
    }
};

export const updateCustomer = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { mobile_number, attributes } = req.body;
        const customer = await Customer.findByPk(id);
        if (customer) {
            await customer.update({ mobile_number, attributes });
            res.status(200).json(customer);
        } else {
            res.status(404).json({ message: "No customer found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating customer" });
    }
};

export const deleteCustomer = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findByPk(id);
        if (customer) {
            await customer.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ message: "No customer found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error deleting customer" });
    }
};