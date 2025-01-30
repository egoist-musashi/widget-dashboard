import { Request, Response } from "express";
import APSRTC from "../models/APSRTC";

export const createAPSRTC = async (req: Request, res: Response) => {
    try {
        const { mobile_number } = req.body;

        const newRecord = await APSRTC.create({ mobile_number });

        res.status(201).json(newRecord);
    } catch (error) {
        console.error("Error creating record in APSRTC:", error);
        res.status(500).json({ message: "Failed to create record", error });
    }
};

export const getAllAPSRTC = async (req: Request, res: Response) => {
    try {
        const records = await APSRTC.findAll();

        res.status(200).json(records);
    } catch (error) {
        console.error("Error fetching records from APSRTC:", error);
        res.status(500).json({ message: "Failed to fetch records", error });
    }
};

export const getAPSRTCById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const record = await APSRTC.findByPk(id);
        if (record) {
            res.status(200).json(record);
        } else {
            res.status(404).json({ message: "Record not found" });
        }
    } catch (error) {
        console.error("Error fetching record from APSRTC:", error);
        res.status(500).json({ message: "Failed to fetch record", error });
    }
};

export const updateAPSRTC = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { mobile_number } = req.body;
        const record = await APSRTC.findByPk(id);
        if (record) {
            await record.update({ mobile_number });
            res.status(200).json(record);
        } else {
            res.status(404).json({ message: "Record not found" });
        }
    } catch (error) {
        console.error("Error updating record in APSRTC:", error);
        res.status(500).json({ message: "Failed to update record", error });
    }
};

export const deleteAPSRTC = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const record = await APSRTC.findByPk(id);
        if (record) {
            await record.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Record not found" });
        }
    } catch (error) {
        console.error("Error deleting record from APSRTC:", error);
        res.status(500).json({ message: "Failed to delete record", error });
    }
};
