import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../db/schema.js';

dotenv.config();

export const usignup = async function (req, res) {
    try {
        const { firstname, lastname, username, email, password } = req.body;
        const hashedPassword = await bcryptjs.hash(password, 10);

        const newuser = await User.create({
            firstname,
            lastname,
            username,
            email,
            password: hashedPassword
        });

        console.log("User created:", newuser);
        res.status(201).json({ msg: newuser });
    } catch (error) {
        console.error('Signup Error:', error);
        res.status(500).json({ msg: "An error occurred during signup" });
    }
};
// console.log(process.env.JWT_SECRET)
export const usignin = async function (req, res) {
    try {
        const { username, email, password } = req.body;

        const validUser = await User.findOne({ email } );
        if (!validUser) {
            return res.status(404).json({ msg: "Invalid credentials" });
        }
        const isPasswordValid = await bcryptjs.compare(password, validUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({ msg: "Invalid credentials" });
        }
        const secret_key = process.env.JWT_SECRET;
        if (!secret_key) {
            console.warn("JWT_SECRET is not defined. Using default value.");
        }
        const token = jwt.sign({ id: validUser._id }, secret_key || "default_secret_key", { expiresIn: '1h' });
        const { password: hashedPassword, ...userdata } = validUser._doc;
        const expiry_Date = new Date(Date.now() + 3600000); 
        res.cookie('access_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            expires: expiry_Date,
        })
        .status(200)
        .json({
            message: "Signin successful",
            user: userdata
        });
    } catch (error) {
        console.error('Signin Error:', error);
        res.status(500).json({ msg: "An error occurred during signin", error: error.message });
    }
};
