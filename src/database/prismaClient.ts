import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient({
  rejectOnNotFound: true,
});

export { prismaClient };
