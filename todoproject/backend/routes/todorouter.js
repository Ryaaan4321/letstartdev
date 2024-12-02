import express from "express";
import {createTodo} from '../controller/todoController'
const todoRouter=express.Router();


todoRouter.post('/create-todo',createTodo);