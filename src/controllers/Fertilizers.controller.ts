import { Request, Response } from "express";
import Fertilizers from "../models/Fertilizers";

export const createFertilizers = async (req: Request, res: Response) => {
    try {
        const { mobile_number } = req.body;
        const newRecord = await Fertilizers.create({ mobile_number });
        res.status(201).json(newRecord);
    } catch (error) {
        res.status(500).json({ message: "Failed to create record", error });
    }
};

export const getAllFertilizers = async (req: Request, res: Response) => {
    try {
        const records = await Fertilizers.findAll();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch records", error });
    }
};

export const getFertilizersById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const record = await Fertilizers.findByPk(id);
        if (record) {
            res.status(200).json(record);
        } else {
            res.status(404).json({ message: "Record not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch record", error });
    }
};

export const updateFertilizers = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { mobile_number } = req.body;
        const record = await Fertilizers.findByPk(id);
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

export const deleteFertilizers = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const record = await Fertilizers.findByPk(id);
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
