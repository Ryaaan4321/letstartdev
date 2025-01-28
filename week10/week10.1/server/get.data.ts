import { getClient } from "./utils";


async function  getUsers() {
   const client=await getClient();
   const selectedUsers=`SELECT * FROM USERS`;
   const userres=await client.query(selectedUsers);
   console.log("users");
   for(let user of userres.rows){
    console.log( ` id ${user.id} , ${user.email}`);

   } 
}
getUsers();