import { Request, Response } from "express";
import User from "../models/Users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "v7kqj3xpn4tmz"; // Replace with a strong secret key

export const login = async (req: Request, res: Response) : Promise<void> => {
    try {
        const { mobile_number, password } = req.body;

        const user = await User.findOne({ where: { mobile_number }, raw: true });

        if (!user) {
            res.status(401).json({ error: "Invalid credentials" });
            return
        }

        if (!user.password) {
            console.error("Password not found in the database for user:", user.mobile_number);
            res.status(500).json({ error: "Password not found in the database" });
            return
        }


        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            res.status(401).json({ error: "Invalid credentials" });
            return
        }

        const token = jwt.sign(
            { userId: user.id, userName: user.mobile_number },
            JWT_SECRET,
            {
                expiresIn: "24h",
            },
        );

        res.json({
            id: user.id,
            mobile_number: user.mobile_number,
            token,
            expiresIn: "24hr",
        });
        return
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Login failed" });
        return
    }
};
