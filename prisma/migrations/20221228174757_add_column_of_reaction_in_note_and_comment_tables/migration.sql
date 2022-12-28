-- CreateEnum
CREATE TYPE "Reaction_note_type" AS ENUM ('LOVE', 'LIKE');

-- CreateEnum
CREATE TYPE "Reaction_Comment_type" AS ENUM ('UP', 'DOWN');

-- CreateTable
CREATE TABLE "Reaction_note" (
    "id" TEXT NOT NULL,
    "type" "Reaction_note_type" NOT NULL DEFAULT 'LOVE',
    "noteId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Reaction_note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reaction_Comment" (
    "id" TEXT NOT NULL,
    "type" "Reaction_Comment_type" NOT NULL DEFAULT 'UP',
    "userId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "Reaction_Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reaction_note" ADD CONSTRAINT "Reaction_note_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "notes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction_note" ADD CONSTRAINT "Reaction_note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction_Comment" ADD CONSTRAINT "Reaction_Comment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "comments_note"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction_Comment" ADD CONSTRAINT "Reaction_Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
