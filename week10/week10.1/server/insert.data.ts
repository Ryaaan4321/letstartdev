import { getClient } from "./utils";

async function createEntries() {
   const client =await getClient();
   const insertUserText=`INSERT INTO users(email,password)
   VALUES($1,$2) RETURNING id`;
   const userValues=['johnnndol@mail.com', 'hashedpassword'];
   let response=await client.query(insertUserText,userValues);

   const insertTodoText= `INSERT INTO todos(title,descreption,user_id,done) VALUES ($1,$2,$3,$4) RETURNING ID`;
   const todoValue=[`Buy buy`,'milkkkk',response.rows[0].id,false];
   await client.query(insertTodoText,todoValue);
   console.log("enterries created");
}
createEntries();