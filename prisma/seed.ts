import { Post, PrismaClient as PrismaClient2 } from '../prisma/generated/client2'
import { parseArgs } from 'node:util'


const prisma = new PrismaClient2()
const options = {
    environment: { type: 'string' },
} as const



async function seedData() {
    const {
        values: { environment },
    } = parseArgs({ options })

      switch (environment) {
        case 'development':
          /** data for your development */
          // Create users
            const user1 = await prisma.user.create({
              data: {
                email: 'user1@gmail.com',
                name: "user1",
              },
            });

            const user2 = await prisma.user.create({
              data: {
                email: 'user2@gmail.com',
                name: "user2",
              },
            });

          await prisma.post.createMany({
            data: [
              {
                title: 'Post 1',
                content: 'Content 1',
                userId: user1.id,
                published: true
              },
              {
                title: 'Post 2',
                content: 'Content 2',
                userId: user2.id,
                published: true
              }
            ],
          });
          break
        case 'test':
          /** data for your test environment */
          break
        default:
          break
      }
  
}
seedData()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })