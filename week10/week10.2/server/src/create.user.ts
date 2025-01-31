import { PrismaClient } from '@prisma/client'

const prisma=new PrismaClient({log:['info','query','error','warn']});

async function main() {
  await prisma.user.create({ 
    data: {
      email: "aaaa@gmail.com",
      name: "aaaaaaaaa",
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
