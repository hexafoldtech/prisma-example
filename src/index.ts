import fastify from 'fastify'
import { PrismaClient as PrismaClient1 } from '../prisma/generated/client1'
import { PrismaClient as PrismaClient2 } from '../prisma/generated/client2'


const server = fastify()

server.get('/example', async (request, reply) => {
    const res1 = await new PrismaClient1().modelPSQL1.findMany();
    const res2 = await new PrismaClient2().modelPSQL2.findMany();

    return {"PSQL1": res1, "PSQL2": res2}
})

server.listen({ port: 8080 }, (err, address) => {
  console.log(`Server listening at ${address}`)
})