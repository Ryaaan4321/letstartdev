import express from 'express';
import { usignup } from '../controller/UserController.js';
import { usginin } from '../controller/UserController.js';
const userrouter=express.Router();

userrouter.post('/usignup',usignup);
userrouter.post('/usginin',usginin);

export default userrouter