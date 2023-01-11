/*
  Warnings:

  - You are about to drop the `Reaction_Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reaction_Emoji` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reaction_note` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `comments_note` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reaction_Comment" DROP CONSTRAINT "Reaction_Comment_commentId_fkey";

-- DropForeignKey
ALTER TABLE "Reaction_Comment" DROP CONSTRAINT "Reaction_Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Reaction_note" DROP CONSTRAINT "Reaction_note_noteId_fkey";

-- DropForeignKey
ALTER TABLE "Reaction_note" DROP CONSTRAINT "Reaction_note_userId_fkey";

-- DropForeignKey
ALTER TABLE "comments_note" DROP CONSTRAINT "comments_note_commentedId_fkey";

-- DropForeignKey
ALTER TABLE "comments_note" DROP CONSTRAINT "comments_note_noteId_fkey";

-- DropForeignKey
ALTER TABLE "comments_note" DROP CONSTRAINT "comments_note_userId_fkey";

-- DropForeignKey
ALTER TABLE "notes" DROP CONSTRAINT "notes_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "notes" DROP CONSTRAINT "notes_userId_fkey";

-- DropTable
DROP TABLE "Reaction_Comment";

-- DropTable
DROP TABLE "Reaction_Emoji";

-- DropTable
DROP TABLE "Reaction_note";

-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "comments_note";

-- DropTable
DROP TABLE "notes";

-- DropTable
DROP TABLE "users";

-- DropEnum
DROP TYPE "Status_note_type";
