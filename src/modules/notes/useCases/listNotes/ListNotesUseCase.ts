import 'reflect-metadata';
import { Note } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { INotesRepository } from '../../repositories/INotesRepository';

@injectable()
class ListNotesUseCase {
  constructor(
    @inject('NotesRepository')
    private notesRepository: INotesRepository
  ) {}
  async execute(): Promise<Note[]> {
    const notes = await this.notesRepository.findAll();
    return notes;
  }
}

export { ListNotesUseCase };
