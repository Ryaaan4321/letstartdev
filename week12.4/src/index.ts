import { Client } from "pg";

const client = new Client('postgresql://neondb_owner:npg_IYyg7mAp0NoP@ep-old-tooth-a8dt8acn-pooler.eastus2.azure.neon.tech/neondb?sslmode=require');

async function createTable() {
    await client.connect();
    const result = await client.query(`
        CREATE TABLE userss(
        id serial PRIMARY KEY,
        username varchar(50) UNIQUE NOT NULL,
        email varchar(50) UNIQUE NOT NULL,
        password varchar(250) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )`)
    console.log("resutl is =" , result);    
}
createTable();

async function insertUserData(username: string, password: string, email: string) {
    await client.connect();
    const result = await client.query(`INSERT INTO userss (username,password,email)
        VALUES('${username}' , '${password}' ,'${email}')`,)

    console.log("resutl is =", result);
}

insertUserData('aryan' ,'arrr@gmail.com' ,'aaaaaaaa');

async function getAllUsers(){
    await client.connect();
    const result=await client.query(`select * from userss`);
    console.log(result);
}
getAllUsers();