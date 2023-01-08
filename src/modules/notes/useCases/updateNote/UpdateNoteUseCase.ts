import { Note } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { ICreateNoteDTO } from '../../dtos/ICreateNoteDTO';
import { INotesRepository } from '../../repositories/INotesRepository';

@injectable()
export class UpdateNoteUseCase {
  constructor(
    @inject('NotesRepository')
    private repository: INotesRepository
  ) {}
  async execute({
    id,
    title,
    description,
    userId,
    categoryId,
    authorOfTitle,
    reaction_EmojiId,
  }: ICreateNoteDTO): Promise<Note | null> {
    return await this.repository.update({
      id,
      title,
      description,
      userId,
      categoryId,
      authorOfTitle,
      reaction_EmojiId,
    });
  }
}
