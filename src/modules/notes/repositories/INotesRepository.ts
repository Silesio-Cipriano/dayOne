import { Note } from '@prisma/client';
import { ICreateNoteDTO } from '../dtos/ICreateNoteDTO';

interface INotesRepository {
  create(data: ICreateNoteDTO): Promise<Note>;
  findById(id: string): Promise<Note | null>;
  findByTitle(id: string): Promise<Note | null>;
  update(data: ICreateNoteDTO): Promise<Note>;
  delete(id: string): Promise<void>;
  findAll(): Promise<Note[]>;
}

export { INotesRepository };
