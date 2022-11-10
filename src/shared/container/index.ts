import { container } from 'tsyringe';
import { UsersRepository } from '../../modules/accounts/repositories/implementation/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { NotesRepository } from '../../modules/notes/repositories/implementation/NotesRepository';
import { INotesRepository } from '../../modules/notes/repositories/INotesRepository';
import { ICategoriesRepository } from '../../modules/notes/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/notes/repositories/implementation/CategoriesRepository';

container.registerSingleton<INotesRepository>(
  'NotesRepository',
  NotesRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);
