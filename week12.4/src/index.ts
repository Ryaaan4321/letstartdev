import { Client } from "pg";

const client = new Client('postgresql://neondb_owner:npg_IYyg7mAp0NoP@ep-old-tooth-a8dt8acn-pooler.eastus2.azure.neon.tech/neondb?sslmode=require');

// async function createTable() {
//     await client.connect();
//     const result2 = await client.query(`CREATE TABLE ADDRESS (
//         id serial PRIMARY KEY,
//         user_id INTEGER NOT NULL,
//         city VARCHAR(100) NOT NULL,
//         country VARCHAR(200) NOT NULL,
//         street VARCHAR(200) NOT NULL,
//         pincode VARCHAR(20),
//         FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
//         )`)
//     console.log("result is =", result2);
// }
// createTable();

// async function insertUserData(username: string, password: string, email: string) {
//     await client.connect();
//     const result = await client.query(`INSERT INTO userss (username,password,email)
//         VALUES('${username}' , '${password}' ,'${email}')`,)
//     console.log("resutl is =", result);
//     const result1 = await client.query(`INSERT INTO userss(username,password,email)
//         VALUES($1,$2,$3)`, [username, password, email]);
//     console.log(result1);
// }
// async function insertAdressData(user_id:number,city:string,country:string,street:string,pincode:string,){
//   await client.connect();
// //   const result=await client.query(`INSERT INTO ADDRESS (user_id,city,country,street,pincode)
// //     VALUES('${user_id}','${city}','${country}','${street}','${pincode}')`)
//   const result1=await client.query(`INSERT INTO ADDRESS(user_id,city,country,street,pincode) 
//     VALUES($1,$2,$3,$4,$5)`,[user_id,city,country,street,pincode])
//     console.log(result1);
// }
// insertAdressData(1,"palermao","palermao","palermo","7856575");
// insertUserData('aryan', 'arrr@gmail.com', 'aaaaaaaa');

async function getAllUsers() {
    await client.connect();
    const result = await client.query(`select * from ADDRESS`);
    console.log(result);
}
getAllUsers();