import { Reaction_note } from '@prisma/client';
import { ICreateReactionNote } from '../dtos/ICreateReactionNote';

interface IReactionsNoteRepository {
  create(data: ICreateReactionNote): Promise<Reaction_note>;
  findAllByNote(noteId: string): Promise<Reaction_note[]>;
}

export { IReactionsNoteRepository };
