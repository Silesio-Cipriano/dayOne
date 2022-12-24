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
    categoryId,
  }: ICreateNoteDTO): Promise<Note> {
    const note = await this.notesRepository.create({
      title,
      description,
      userId,
      categoryId,
    });

    return note;
  }
}

export { CreateNoteUseCase };
