import { Status_note_type } from '@prisma/client';

interface ICreateNoteDTO {
  id?: string;
  title: string;
  description: string;
  image?: string;
  userId: string;
  categoryId?: string;
  status?: Status_note_type;
  reaction_EmojiId: string;
  authorOfTitle: string;
}

export { ICreateNoteDTO };
