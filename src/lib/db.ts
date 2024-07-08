import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function test() {
  const token = await db.sMSToken.create({
    data: {
      tokne: "2121212",
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });
  console.log(token);
}
test();
// async function test() {
//   const user = await db.user.findMany({
//     where: {
//       usename: {
//         contains: "est",
//       },
//     },
//   });
//   console.log(user);
// }

// test();
export default db;
