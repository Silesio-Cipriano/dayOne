import { Reaction_note } from '@prisma/client';
import { ICreateReactionNote } from '../../dtos/ICreateReactionNote';
import { IReactionsNoteRepository } from '../IReactionsNoteRepository';

export class ReactionsNoteRepositoryInMemory
  implements IReactionsNoteRepository
{
  reactionsNote: Reaction_note[] = [];

  async create({
    type = 'LOVE',
    noteId,
    userId,
  }: ICreateReactionNote): Promise<Reaction_note> {
    const reactionNote: Reaction_note = {
      id: '1' + Math.random() + 100,
      type,
      noteId,
      userId,
    };

    this.reactionsNote.push(reactionNote);

    return reactionNote;
  }
  async findAllByNote(noteId: string): Promise<Reaction_note[]> {
    const reationsNote = this.reactionsNote;
    return reationsNote;
  }
}
