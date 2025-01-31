import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient({log:['info','query','error','warn']})

async function  fucc() {
    const users=await prisma.user.findMany({});
    console.log(users);
    const user=await prisma.user.findUnique({
        where:{
            id:1
        },
        include:{
            posts:true
        }
    })
    console.log(user);
}
fucc();