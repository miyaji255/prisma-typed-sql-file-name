import {PrismaClient} from "prisma-client-with-driverAdapters"
import { getUsers } from "prisma-client-with-driverAdapters/sql";

const prisma = new PrismaClient();

const users = await prisma.$queryRawTyped(getUsers())

console.log(users)
