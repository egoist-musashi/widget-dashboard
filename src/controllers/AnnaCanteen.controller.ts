import { Request, Response } from "express";
import AnnaCanteen from "../models/AnnaCanteen";

export const createAnnaCanteen = async (req: Request, res: Response) => {
    try {
        const { mobile_number } = req.body;

        const newRecord = await AnnaCanteen.create({ mobile_number });

        res.status(201).json(newRecord);
    } catch (error) {
        console.error("Error creating record in AnnaCanteen:", error);
        res.status(500).json({ message: "Failed to create record", error });
    }
};

export const getAllAnnaCanteen = async (req: Request, res: Response) => {
    try {
        const records = await AnnaCanteen.findAll();

        res.status(200).json(records);
    } catch (error) {
        console.error("Error fetching records from AnnaCanteen:", error);
        res.status(500).json({ message: "Failed to fetch records", error });
    }
};

export const getAnnaCanteenById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const record = await AnnaCanteen.findByPk(id);
        if (record) {
            res.status(200).json(record);
        } else {
            res.status(404).json({ message: "Record not found" });
        }

    } catch (error) {
        console.error("Error fetching record from AnnaCanteen:", error);
        res.status(500).json({ message: "Failed to fetch record", error });
    }
};

export const updateAnnaCanteen = async (req: Request, res: Response):Promise<void> => {
    try {
        const { id } = req.params;
        const { mobile_number } = req.body;
        const record = await AnnaCanteen.findByPk(id);
        if (record) {
            await record.update({ mobile_number });
            res.status(200).json(record);
        } else {
            res.status(404).json({ message: "Record not found" });
        }
        res.status(200).json(record);
    } catch (error) {
        console.error("Error updating record in AnnaCanteen:", error);
        res.status(500).json({ message: "Failed to update record", error });
    }
};

export const deleteAnnaCanteen = async (req: Request, res: Response):Promise<void> => {
    try {
        const { id } = req.params;
        const record = await AnnaCanteen.findByPk(id);
        if(record){
            await record.destroy();
            res.status(204).send();
        }else {
            res.status(404).json({ message: "No customer found" });
        }
    } catch (error) {
        console.error("Error deleting record from AnnaCanteen:", error);
        res.status(500).json({ message: "Failed to delete record", error });
    }
};
