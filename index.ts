import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main(): Promise<void> {
    const allUsers = await prisma.actor.findMany({take: 5});
    console.log(allUsers)
}

main()
    .then(async (): Promise<void> => {
        await prisma.$disconnect();
    })
    .catch(async (e): Promise<void> => {
        console.error(e)
        await prisma.$disconnect()
    })