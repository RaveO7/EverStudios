import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function POST(request: Request) {
    if (request.method !== 'POST') { return new Response("Method Not Allowed", { status: 405 }) }

    const res = await request.json()

    try {
        const result = await prisma.data.create({
            data: {
                mail: res.mail,
                product: res.product,
            },
        });
        await prisma.$disconnect()
        return new Response(`Données insérées avec succès: ${result}`, { status: 200, })

    }
    catch (error: any) {
        await prisma.$disconnect()
        return new Response(`Webhook error: ${error.message}`, { status: 400, })
    }
}