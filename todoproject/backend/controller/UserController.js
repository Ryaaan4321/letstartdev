import express from 'express'
import { User } from '../db/schema.js'
import { Admin } from '../db/schema.js'
import bcryptjs from 'bcryptjs'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


export const usignup = async function (req, res) {
    try {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const hashedPassword = await bcryptjs.hash(password, 10);
        const newuser = await User.create({
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: hashedPassword
        })
        newuser.save();
        console.log(newuser);
        res.status(201).json({
            msg: newuser
        })
    } catch (error) {
        res.status(500).json({
            msg: "an error occured"
        })
    }

};

export const usignin = async function (req, res) {
    try {
        const { username, email, password } = req.body;
        const validUser = await User.findOne({ username });
        const validEmail = await User.findOne({ email });
        if (!validUser || !validEmail) {
            return res.status(404).json({
                msg: "Invalid credentials",
            });
        }
        const isPasswordValid = await bcryptjs.compare(password, validUser.password);
        if (!isPasswordValid) {
            return res.status(404).json({
                msg: "Invalid credentials",
            });
        }
        const secret_key=process.env.JWT_SECRET || "bhadwesecretkeydekhega"
        const token = jwt.sign({ id: validUser._id }, secret_key, { expiresIn: '1h' });
        console.log(token);
        const expiry_Date = new Date(Date.now() + 3600000); 
        const { password: hashedPassword, ...userdata } = validUser._doc;
        res.cookie('access_token', token, {
            httpOnly: true,
            expires: expiry_Date,
        })
        .status(200)
        .json(userdata);
    } catch (error) {
        console.error('Signin Error:', error.message);
        res.status(500).json({
            msg: 'An error occurred during signin',
            error: error.message,
        });
    }
};