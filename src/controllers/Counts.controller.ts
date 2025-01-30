import { Request, Response } from "express";
import AnnaCanteen from "../models/AnnaCanteen";
import Pension from "../models/Pension";
import APSRTC from "../models/APSRTC";
import Health from "../models/Health";
import Sand from "../models/Sand";
import Fertilizers from "../models/Fertilizers";
import Endowment from "../models/Endowment";
import Deepam from "../models/Deepam";

// Define a type for the request parameters
interface Params {
    tableName: string;
}

export const getCounts = async (req: Request<Params>, res: Response) : Promise<void> => {
    try {
        const { tableName } = req.params;

        // Define a mapping between table names and models
        const validTables = {
            anna_canteen: AnnaCanteen,
            pension: Pension,
            apsrtc: APSRTC,
            health: Health,
            sand: Sand,
            fertilizers: Fertilizers,
            endowment: Endowment,
            deepam: Deepam,
        };

        // Validate the table name
        const Model = validTables[tableName as keyof typeof validTables];
        if (!Model) {
           res.status(400).json({ message: "Invalid table name" });
           return
        }

        const [totalRecords, totalUniqueMobileNumbers] = await Promise.all([
            Model.count(), // Total number of records
            Model.count({ distinct: true, col: "mobile_number" }), // Count unique mobile numbers
        ]);

        // Calculate repeated customers
        const repeatedCustomers = totalRecords - totalUniqueMobileNumbers;

        res.status(200).json({
            totalUniqueMobileNumbers,
            repeatedCustomers,
        });
    } catch (error) {
        console.error("Error fetching counts:", error);
        res.status(500).json({ message: "Error fetching counts" });
    }
};
