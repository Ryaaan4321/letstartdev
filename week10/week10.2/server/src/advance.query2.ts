import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['info','query']})

async function fucc(){
    let res=await prisma.post.findMany({
        take:2,
        skip:0
    })
    console.log(res);
}
fucc();