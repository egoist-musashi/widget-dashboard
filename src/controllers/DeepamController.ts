import { Request, Response } from "express";
import Deepam from "../models/Deepam";

export const createDeepam = async (req: Request, res: Response) => {
    try {
        const { mobile_number } = req.body;
        const newRecord = await Deepam.create({ mobile_number });
        res.status(201).json(newRecord);
    } catch (error) {
        res.status(500).json({ message: "Failed to create record", error });
    }
};

export const getAllDeepam = async (req: Request, res: Response) => {
    try {
        const records = await Deepam.findAll();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch records", error });
    }
};

export const getDeepamById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const record = await Deepam.findByPk(id);
        if (record) {
            res.status(200).json(record);
        } else {
            res.status(404).json({ message: "Record not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch record", error });
    }
};

export const updateDeepam = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { mobile_number } = req.body;
        const record = await Deepam.findByPk(id);
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

export const deleteDeepam = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const record = await Deepam.findByPk(id);
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
