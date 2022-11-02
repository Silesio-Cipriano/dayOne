import { container } from 'tsyringe';
import { NotesRepository } from '../../modules/notes/repositories/implementation/NotesRepository';
import { INotesRepository } from '../../modules/notes/repositories/INotesRepository';

container.registerSingleton<INotesRepository>(
  'NotesRepository',
  NotesRepository
);
