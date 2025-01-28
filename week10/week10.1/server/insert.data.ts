import { getClient } from "./utils";

async function createEntries() {
    const client = await getClient();
    const insertUserText = `INSERT INTO users(email, password) VALUES($1, $2) RETURNING id`;
    const userValues = ['jlmmmllllllllllllllljjjjff@mail.com', 'hashedpassword'];
    const response = await client.query(insertUserText, userValues);

    const insertTodoText = `INSERT INTO todos(id,title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id`;
    const todoValue = ['Buy buy', 'milkkkk', response.rows[0].id, false];
    await client.query(insertTodoText, todoValue);
    console.log("Entries created");
}
createEntries();