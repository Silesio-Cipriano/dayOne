/*
  Warnings:

  - Added the required column `reaction_EmojiId` to the `notes` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status_note_type" AS ENUM ('PRIVATE', 'PUBLIC');

-- AlterTable
ALTER TABLE "notes" ADD COLUMN     "reaction_EmojiId" TEXT NOT NULL,
ADD COLUMN     "status" "Status_note_type" NOT NULL DEFAULT 'PRIVATE';

-- CreateTable
CREATE TABLE "Reaction_Emoji" (
    "id" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,

    CONSTRAINT "Reaction_Emoji_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_reaction_EmojiId_fkey" FOREIGN KEY ("reaction_EmojiId") REFERENCES "Reaction_Emoji"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
