import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Todo, User } from '../db/schema.js';
import zod from 'zod'
import bcrypt from 'bcryptjs'
dotenv.config();

const signupSchema = zod.object({
    firstname: zod.string(),
    lastname: zod.string(),
    username: zod.string(),
    password: zod.string()
})

export const usignup = async function (req, res) {
    const { success } = signupSchema.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs",
        });
    }
    const existingUser = await User.findOne({
        username: req.body.email,
    });
    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken",
        });
    }
    const { firstname, lastname, username,email, password }=req.body;
    const salt = 10;
    const hashedPassword = await bcrypt.hashSync(password, salt);
    const newUser = await User.create({
        username,
        firstname,
        lastname,
        email,
        password: hashedPassword,
    });
    const userId = newUser._id;
    await Todo.create({
        userId,
        title:""
    });
    const token = jwt.sign(
        {
            userId,
        },
        process.env.JWT_SECRET
    );
    console.log(process.env.JWT_SECRET);
    res.status(200).json({
        message: "User created successfully",
        token: token,
    });
};
// console.log(process.env.JWT_SECRET)
export const usignin = async function (req, res) {
    try {
        const { email, password } = req.body;

        const validUser = await User.findOne({ email });
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
