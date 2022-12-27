/*
  Warnings:

  - You are about to drop the `_comments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_comments" DROP CONSTRAINT "_comments_A_fkey";

-- DropForeignKey
ALTER TABLE "_comments" DROP CONSTRAINT "_comments_B_fkey";

-- AlterTable
ALTER TABLE "comments_note" ADD COLUMN     "commentedId" TEXT;

-- DropTable
DROP TABLE "_comments";

-- AddForeignKey
ALTER TABLE "comments_note" ADD CONSTRAINT "comments_note_commentedId_fkey" FOREIGN KEY ("commentedId") REFERENCES "comments_note"("id") ON DELETE SET NULL ON UPDATE CASCADE;
