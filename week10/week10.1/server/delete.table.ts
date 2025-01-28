import { getClient } from "./utils";

async function deltetSomeThing(userid:number){
   const client=getClient();
   const deleteTodoText= `DELETE FROM users where id=$1`;
   (await client).query(deleteTodoText,[userid]);
   console.log(` user has been delted with this user id ${userid}`);
}
deltetSomeThing(3)