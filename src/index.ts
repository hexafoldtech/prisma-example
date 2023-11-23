import fastify from 'fastify'
import { PrismaClient as OrderClientPrisma } from '../prisma/generated/order_client'
import { PrismaClient as AuthClientPrisma } from '../prisma/generated/auth_client'


const server = fastify()

server.get('/example', async (request, reply) => {
    const res1 = await new OrderClientPrisma().orders.findMany();
    const res2 = await new AuthClientPrisma().user.findMany();

    return {"PSQL1": res1, "PSQL2": res2}
})

server.listen({ port: 8080 }, (err, address) => {
  console.log(`Server listening at ${address}`)
})