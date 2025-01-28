import { getClient } from "./utils";


async function  getUsers() {
   const client=await getClient();
   const selectedUsers=`SELECT * FROM USERS`;
   const userres=await client.query(selectedUsers);
   console.log("users");
   for(let user of userres.rows){
    console.log( ` id ${user.id} , ${user.email}`);

   } 
}
async function  getUserFromEmail(email:string) {
    const client=await getClient();
    const selectedUserr=`SELECT * FROM USERS WHERE email=$1`;
    const res=await client.query(selectedUserr,[email]);
    console.log("res getting logged");
    for (let user of res.rows){
        console.log(` user ki user id = ${user.id} , ${user.email}`);
    }
}
async function getTodosForUser(userId: number) {
    try {
        const client = await getClient();
        const selectTodosQuery = `SELECT * FROM todos WHERE user_id=$1;`; 
        const res = await client.query(selectTodosQuery, [userId]);
        if (res.rows.length === 0) {
            console.log(`No todos found for user with id ${userId}`);
            return;
        }
        for (const todo of res.rows) {
            console.log(`${todo.id} = ${todo.title} = ${todo.description} = ${todo.done}`);
        }
    } catch (error) {
        console.error("Error fetching todos for user:", error);
    }
}
const id = 3;
getTodosForUser(id);

