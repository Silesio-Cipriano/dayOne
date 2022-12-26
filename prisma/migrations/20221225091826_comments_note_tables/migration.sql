-- CreateTable
CREATE TABLE "comments_note" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "noteId" TEXT NOT NULL,

    CONSTRAINT "comments_note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_comments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_comments_AB_unique" ON "_comments"("A", "B");

-- CreateIndex
CREATE INDEX "_comments_B_index" ON "_comments"("B");

-- AddForeignKey
ALTER TABLE "comments_note" ADD CONSTRAINT "comments_note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments_note" ADD CONSTRAINT "comments_note_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "notes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_comments" ADD CONSTRAINT "_comments_A_fkey" FOREIGN KEY ("A") REFERENCES "comments_note"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_comments" ADD CONSTRAINT "_comments_B_fkey" FOREIGN KEY ("B") REFERENCES "comments_note"("id") ON DELETE CASCADE ON UPDATE CASCADE;
