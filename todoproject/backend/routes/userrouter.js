import express from 'express';
import { usignin, usignup } from '../controller/UserController.js';
const userrouter=express.Router();

userrouter.post('/usignup',usignup);
userrouter.post('/usignin',usignin);

export default userrouter