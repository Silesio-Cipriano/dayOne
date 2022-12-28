import { Reaction_note, Reaction_note_type } from '@prisma/client';
import { prismaClient } from '../../../../database/prismaClient';
import { ICreateReactionNote } from '../../dtos/ICreateReactionNote';
import { IReactionsNoteRepository } from '../IReactionsNoteRepository';

export class ReactionsNoteRepository implements IReactionsNoteRepository {
  async create({
    type = 'LOVE',
    noteId,
    userId,
  }: ICreateReactionNote): Promise<Reaction_note> {
    const reactionNote = await prismaClient.reaction_note.create({
      data: {
        noteId,
        type,
        userId,
      },
    });

    return reactionNote;
  }
  async findAllByNote(noteId: string): Promise<Reaction_note[]> {
    const reactionsNote = await prismaClient.reaction_note.findMany({
      where: {
        noteId,
      },
    });

    return reactionsNote;
  }
}
