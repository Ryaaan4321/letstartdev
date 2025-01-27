import { getClient } from "./utils";

async function createTable() {
    const client =await getClient();
    const createTableQuery = `
    CREATE TABLE users{
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    }`
    await client.query(createTableQuery);
    const createTodoQuery=`
    CREATE TABLE todos{
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id  INTERGER REFERENCES users(id),
    dont BOOLEAN DEFAULT FALSE
    }`
    await client.query(createTodoQuery);
}