import express from 'express';
import jwt from 'jsonwebtoken'
import dotnev from 'dotenv'

dotnev.config();


const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader && !authHeader.startWith('Bearer')) {
        return res.status(401).json({

        })
    }
    const token = authHeader.split('')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({

        })
    }
}
export default authMiddleware;