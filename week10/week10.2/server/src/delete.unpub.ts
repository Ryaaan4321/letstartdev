import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient({log:['info','query']});

async function fucc(){
    await prisma.user.update({
        where:{
            id:1
        },
        data:{
            posts:{
                deleteMany:{
                    published:false
                }
            }
        }
    })
}
fucc();