import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function insertUser(username: string, password: string, firstname: string, lastname: string,email:string) {
    try {
        const newUser = await prisma.user.create({
            data: {
                username,
                password,
                firstname,
                lastname,
                email
            },
        });
        console.log('User created:', newUser);
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        await prisma.$disconnect();
    }
}


insertUser("ar","arr","arr","arrrr","arr@gmail.com");