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
      description TEXT NOT NULL,
      user_id INTEGER REFERENCES users(id),
      done BOOLEAN DEFAULT FALSE
    );
  `;
  await client.query(createTodoQuery);
  console.log("Tables created successfully");
}

async function createEntries() {
  const client = await getClient();
  const insertUserText = `INSERT INTO users(email, password) VALUES ($1, $2) RETURNING id`;
  const userValues = ["jkka@gmail.com", "pepepep"];
  const response = await client.query(insertUserText, userValues);

  const insertTodoText = `
    INSERT INTO todos(title, description, user_id, done)
    VALUES ($1, $2, $3, $4)
  `;
  const todoValues = ["Buy groceries", "Milk and bread", response.rows[0].id, false];
  await client.query(insertTodoText, todoValues);
  console.log("Entries created successfully");
}
