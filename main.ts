import { PrismaClient } from "prisma-client-with-driverAdapters";
import { getUsers } from "prisma-client-with-driverAdapters/sql";
import { PrismaPg} from "@prisma/adapter-pg-worker"
import { Pool } from "@prisma/pg-worker"

export default {
  async fetch() {
    const prisma = new PrismaClient({
      adapter: new PrismaPg(new Pool({
        database: "postgresql://postgres:postgres@localhost:5432/testdb?schema=public"
      }))
    });

    const users = await prisma.$queryRawTyped(getUsers());

    console.log(users);
  },
};
