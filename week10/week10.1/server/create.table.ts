import { getClient } from "./utils";



async function createTable() {
    const client = await getClient();
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email TEXT  NOT NULL,
      password TEXT NOT NULL,
      CONSTRAINT users_email_key UNIQUE (email)
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

  const checkUserText = `SELECT id FROM users WHERE email = $1`;
  const userValues = ["lllglglglglglglggla@gmail.com","hashedpassword"];
  const userCheck = await client.query(checkUserText, userValues);

  let userId;
  if (userCheck.rows.length === 0) {
      const insertUserText = `INSERT INTO users(email, password) VALUES ($1, $2) RETURNING id`;
      const response = await client.query(insertUserText, ["pka@gmail.com", "pepepep"]);
      userId = response.rows[0].id;
  } else {
      userId = userCheck.rows[0].id;
  }

  const insertTodoText = `
    INSERT INTO todos(title, description, user_id, done)
    VALUES ($1, $2, $3, $4)
  `;
  const todoValues = ["Buy groceries", "Milk and bread", userId, false];
  await client.query(insertTodoText, todoValues);
  console.log("Entries created successfully");
}

createTable();
createEntries();
