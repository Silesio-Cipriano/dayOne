-- DropForeignKey
ALTER TABLE "notes" DROP CONSTRAINT "notes_categoryId_fkey";

-- AlterTable
ALTER TABLE "notes" ALTER COLUMN "categoryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
