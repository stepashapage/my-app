import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prismaglobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prismaglobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaglobal = prisma;
