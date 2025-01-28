import { getClient } from "./utils";


async function  updateUser(userId:number) {
    const client=await getClient();
    const updatedText=`UPDATE users set email = $1 where id=$2`;
    await client.query(updatedText,['aaaaaaaaa@gmail.com',userId]);
    console.log(` todo with the id ${userId} is done`)
}
let id=3
updateUser(id);
