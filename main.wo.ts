import {PrismaClient} from "prisma-client-without-driverAdapters"
import { getUsers } from "prisma-client-without-driverAdapters/sql";

const prisma = new PrismaClient();

const users = await prisma.$queryRawTyped(getUsers())

console.log(users)
