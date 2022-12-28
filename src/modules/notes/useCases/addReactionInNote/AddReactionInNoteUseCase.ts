import { Reaction_note } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { ICreateReactionNote } from '../../dtos/ICreateReactionNote';
import { IReactionsNoteRepository } from '../../repositories/IReactionsNoteRepository';

@injectable()
export class AddReactionInNoteUseCase {
  constructor(
    @inject('reactionsNoteRepository')
    private reactionNoteRepository: IReactionsNoteRepository
  ) {}

  async execute({
    type,
    noteId,
    userId,
  }: ICreateReactionNote): Promise<Reaction_note> {
    const reactionNote = await this.reactionNoteRepository.create({
      type,
      noteId,
      userId,
    });

    return reactionNote;
  }
}
