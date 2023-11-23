import { PrismaClient as PrismaClient2 } from '../prisma/generated/client2'
import { parseArgs } from 'node:util'

const prisma = new PrismaClient2()
const options = {
    environment: { type: 'string' },
} as const


const posts = [
  {
    title: 'Follow Prisma on Twitter',
    content: 'https://twitter.com/prisma',
    published: true,
  },
  {
    title: 'Follow Nexus on Twitter',
    content: 'https://twitter.com/nexusgql',
    published: true,
  },
]


async function main() {
    const {
        values: { environment },
    } = parseArgs({ options })

      switch (environment) {
        case 'development':
          /** data for your development */
          const alice = await prisma.user.upsert({
            where: { email: 'alice@prisma.io' },
            update: {},
            create: {
              email: 'alice@prisma.io',
              name: 'Alice',
              posts: {
                create: posts,
              },
            },
          })
          const bob = await prisma.user.upsert({
            where: { email: 'bob@prisma.io' },
            update: {},
            create: {
              email: 'bob@prisma.io',
              name: 'Bob',
              posts: {
                create: posts,
              },
            },
          })
          console.log({ alice, bob })
          break
        case 'test':
          /** data for your test environment */
          break
        default:
          break
      }
  
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