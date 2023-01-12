-- CreateEnum
CREATE TYPE "User_Status" AS ENUM ('ACTIVE', 'BLOCKED', 'SUSPENDED');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "status" "User_Status" NOT NULL DEFAULT 'BLOCKED';
