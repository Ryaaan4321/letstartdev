"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    );
  `;
        yield client.query(createTableQuery);
        const createTodoQuery = `
    CREATE TABLE IF NOT EXISTS todos (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      user_id INTEGER REFERENCES users(id),
      done BOOLEAN DEFAULT FALSE
    );
  `;
        yield client.query(createTodoQuery);
        console.log("Tables created successfully");
    });
}
function createEntries() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        const insertUserText = `INSERT INTO users(email, password) VALUES ($1, $2) RETURNING id`;
        const userValues = ["jkka@gmail.com", "pepepep"];
        const response = yield client.query(insertUserText, userValues);
        const insertTodoText = `
    INSERT INTO todos(title, description, user_id, done)
    VALUES ($1, $2, $3, $4)
  `;
        const todoValues = ["Buy groceries", "Milk and bread", response.rows[0].id, false];
        yield client.query(insertTodoText, todoValues);
        console.log("Entries created successfully");
    });
}
createTable();
createEntries();
