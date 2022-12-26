import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient({
  rejectOnNotFound: {
    findUnique: true,
  },
});

export { prismaClient };
