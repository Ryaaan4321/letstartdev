import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['query']});

async function fucc(){
    await prisma.user.update({
        where:{
            id:1
        },
        data:{
            name:"pppppp",
            email:".comgmail@pppp"
        }
    })
}
fucc();