import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient({log:['info','query','error','warn']});

async function main() {
    await prisma.post.create({
        data:{
            title:"istttttt",
            content:"huhhhhhhh",
            published:false,
            author:{
                connect:{
                    id:1
                }
            }
        }
    })
}
main();