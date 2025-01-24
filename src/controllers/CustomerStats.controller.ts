import { Request, Response } from "express";
import { Op } from "sequelize";
import Customer from "../models/Customers";

export const getCustomerStats = async (req: Request, res: Response) => {
    try {
        const [
            totalUniqueMobileNumbers,
            totalCadreTrue,
            totalNonCadre,
            totalHouseholds,
            totalLPG,
            totalDKrishi,
        ] = await Promise.all([
            Customer.count({
                distinct: true,
                col: "mobile_number",
            }),
            Customer.count({
                where: {
                    "attributes.cadre": true,
                },
            }),
            Customer.count({
                where: {
                    "attributes.cadre": false,
                },
            }),
            Customer.count({
                where: {
                    "attributes.isHousehold": true,
                },
            }),
            Customer.count({
                where: {
                    "attributes.isLPG": true,
                },
            }),
            Customer.count({
                where: {
                    "attributes.isDkrishi": true,
                },
            }),
        ]);
        res.status(200).json({
            totalUniqueMobileNumbers,
            totalCadreTrue,
            totalNonCadre,
            totalHouseholds,
            totalLPG,
            totalDKrishi,
        });
    } catch (err) {
        console.error("Error fetching customer statistics:", err);
        res.status(500).json({ message: "Error fetching customer statistics" });
    }
};
