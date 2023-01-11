import 'reflect-metadata';
import { Note } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { ICreateNoteDTO } from '../../dtos/ICreateNoteDTO';
import { INotesRepository } from '../../repositories/INotesRepository';

@injectable()
class CreateNoteUseCase {
  constructor(
    @inject('NotesRepository')
    private notesRepository: INotesRepository
  ) {}

  async execute({
    title,
    description,
    userId,
    reaction_EmojiId,
    status,
    authorOfTitle,
  }: ICreateNoteDTO): Promise<Note> {
    const note = await this.notesRepository.create({
      authorOfTitle,
      title,
      description,
      userId,
      reaction_EmojiId,
      status,
    });

    note.status;
    return note;
  }
}

export { CreateNoteUseCase };
