import { getClient } from "./utils";

async function joinTables(id:number) {
    const client = await getClient();
    const response = await client.query(
        `SELECT users.*, todos.title, todos.description, todos.done 
        FROM users 
        LEFT JOIN todos ON users.id = todos.user_id 
        WHERE users.id=$1`,
        [id]
    );
    console.log(response.rows);
}
joinTables(3);