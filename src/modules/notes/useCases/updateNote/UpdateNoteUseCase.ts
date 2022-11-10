import { Note } from '@prisma/client';
import { inject } from 'tsyringe';
import { ICreateNoteDTO } from '../../dtos/ICreateNoteDTO';
import { INotesRepository } from '../../repositories/INotesRepository';

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
  }: ICreateNoteDTO): Promise<Note> {
    return await this.repository.update({ id, title, description, userId });
  }
}
