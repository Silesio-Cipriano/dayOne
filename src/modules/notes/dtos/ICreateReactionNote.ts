import { Reaction_note_type } from '@prisma/client';

interface ICreateReactionNote {
  id?: string;
  noteId: string;
  userId: string;
  type: Reaction_note_type;
}

export { ICreateReactionNote };
