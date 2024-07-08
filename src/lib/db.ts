import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function test() {
  const like = await db.like.create({
    data: {
      like: false,
      user: {
        connect: {
          id: 1,
        },
      },
      tweet: {
        connect: {
          id: 1,
        },
      },
    },
  });
  console.log(like);
}
test();
