import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        };

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User not found",
                success: false
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials",
                success: false
            });
        }

        const tokenData = {
            id: user._id
        }

        const token = await jwt.sign(tokenData, "fhgfsggdfhgffhfgjgvj", { expiresIn: "1d" });// token expiration time is 1 day
        return res.status(200).cookie("token", token, {httpOnly: true}).json({
            message: "User logged in successfully",
            user,
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An internal server error occurred.",
            success: false
        });
    }
}

export const Logout = async (req, res) => {
    return res.status(200).cookie("token", "", { expiresIn:new Date(Date.now()), httpOnly: true }).json({
        message: "User logged out successfully",
        success: true
    });
}

export const Register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already exists",
                success: false
            })
        }

        const hashedPassword = await bcrypt.hash(password, 16);


        await User.create({
            fullName,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "User created successfully",
            success: true
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An internal server error occurred.",
            success: false
        });
    }

}