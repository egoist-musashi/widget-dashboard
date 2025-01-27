import { Request, Response } from "express";
import User from "../models/Users";
import { hashPassword } from "../helperUtils/Password";

export const createUser = async (req: Request, res: Response) => {
    try {
        const {mobile_number, password } = req.body;
        const hashedPassword = await hashPassword(password);
        const user = await User.create({
            mobile_number,
            password: hashedPassword,
        });

        res.status(201).json(user);
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).json({ message: "Error creating user" });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "No user found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting user" });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll();

        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting users" });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { mobile_number, password } = req.body;
        const user = await User.findByPk(id);

        if (user) {
            const hashedPassword = password ? await hashPassword(password) : user.password;
            await user.update({
                mobile_number,
                password: hashedPassword,
            });

            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "No user found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating user" });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ message: "No user found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error deleting user" });
    }
};
