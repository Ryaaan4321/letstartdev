import { Todo } from '../db/schema.js'
import { userMiddleware } from '../middleware/usermiddleware'


export const createTodo = async function (req, res, next) {
    const title = req.body
    const description = req.body
    const status = req.body
    const priority = req.body
    const changeLog = req.body
    try {
        if (!userMiddleware) {
            res.status(403).json({
                msg: "you should login first to create the todo"
            })
            return
        };
        const newTodo = new Todo({
            title: title,
            description: description,
            status: status,
            priority: priority,
            changeLog: changeLog
        })
        newTodo.save();
        res.status(200).json({
            msg: "Todo is created succesfully",
            data: newTodo
        })
    }catch(error){
        res.status(500).json(
            {
                message:"Internal server error"
            }
        )
    }

}