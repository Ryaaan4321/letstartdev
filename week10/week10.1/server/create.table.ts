import { getClient } from "./utils";

async function createTable() {
  const client = await getClient();
  const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      );
    `;
  await client.query(createTableQuery);
  const createTodoQuery = `
      CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        user_id INTEGER REFERENCES users(id),
        done BOOLEAN DEFAULT FALSE
      );
    `;
  await client.query(createTodoQuery);
  console.log("Tables created successfully");

}

createTable();
