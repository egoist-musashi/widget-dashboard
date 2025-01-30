import { Request, Response } from "express";
import Health from "../models/Health";

export const createHealth = async (req: Request, res: Response) => {
    try {
        const { mobile_number } = req.body;
        const newRecord = await Health.create({ mobile_number });
        res.status(201).json(newRecord);
    } catch (error) {
        res.status(500).json({ message: "Failed to create record", error });
    }
};

export const getAllHealth = async (req: Request, res: Response) => {
    try {
        const records = await Health.findAll();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch records", error });
    }
};

export const getHealthById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const record = await Health.findByPk(id);
        if (record) {
            res.status(200).json(record);
        } else {
            res.status(404).json({ message: "Record not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch record", error });
    }
};

export const updateHealth = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { mobile_number } = req.body;
        const record = await Health.findByPk(id);
        if (record) {
            await record.update({ mobile_number });
            res.status(200).json(record);
        } else {
            res.status(404).json({ message: "Record not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to update record", error });
    }
};

export const deleteHealth = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const record = await Health.findByPk(id);
        if (record) {
            await record.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Record not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to delete record", error });
    }
};
