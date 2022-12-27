import { Note } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { INotesRepository } from '../../repositories/INotesRepository';

@injectable()
export class ListNotesByUserUserCase {
  constructor(
    @inject('NotesRepository')
    private repository: INotesRepository
  ) {}

  async execute(userId: string): Promise<Note[]> {
    const notes = await this.repository.findAllByUser(userId);
    return notes;
  }
}
