-- CreateEnum
CREATE TYPE "Status_note_type" AS ENUM ('PRIVATE', 'PUBLIC');

-- CreateTable
CREATE TABLE "notes" (
    "id" TEXT NOT NULL,
    "authorOfTitle" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "categoryId" TEXT,
    "status" "Status_note_type" NOT NULL DEFAULT 'PRIVATE',
    "reaction_EmojiId" TEXT NOT NULL,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reaction_Emoji" (
    "id" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,

    CONSTRAINT "Reaction_Emoji_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "comments_note" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "noteId" TEXT NOT NULL,
    "commentedId" TEXT,

    CONSTRAINT "comments_note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction_note" ADD CONSTRAINT "Reaction_note_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "notes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction_note" ADD CONSTRAINT "Reaction_note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction_Comment" ADD CONSTRAINT "Reaction_Comment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "comments_note"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction_Comment" ADD CONSTRAINT "Reaction_Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments_note" ADD CONSTRAINT "comments_note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments_note" ADD CONSTRAINT "comments_note_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "notes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments_note" ADD CONSTRAINT "comments_note_commentedId_fkey" FOREIGN KEY ("commentedId") REFERENCES "comments_note"("id") ON DELETE SET NULL ON UPDATE CASCADE;
