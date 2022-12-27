import { ICreateNoteDTO } from '../../dtos/ICreateNoteDTO';
import { NotesRepositoryInMemory } from '../../repositories/in-memory/NotesRepositoryInMemory';
import { CreateNoteUseCase } from '../createNote/CreateNoteUseCase';
import { ListNotesByUserUserCase } from './ListNotesByUserUserCase';

let notesRepositoryInMemory: NotesRepositoryInMemory;
let listNotesByUserUserCase: ListNotesByUserUserCase;
let createNoteUseCase: CreateNoteUseCase;

describe('List notes by user', () => {
  beforeEach(async () => {
    notesRepositoryInMemory = new NotesRepositoryInMemory();
    listNotesByUserUserCase = new ListNotesByUserUserCase(
      notesRepositoryInMemory
    );
    createNoteUseCase = new CreateNoteUseCase(notesRepositoryInMemory);

    let note: ICreateNoteDTO = {
      categoryId: '1',
      image: '',
      description: 'new note',
      title: 'Create Note01',
      userId: '1',
    };

    await createNoteUseCase.execute(note);

    note = {
      categoryId: '1',
      image: '',
      description: 'new note',
      title: 'Create Note02',
      userId: '1',
    };
    await createNoteUseCase.execute(note);

    note = {
      categoryId: '1',
      image: '',
      description: 'new note',
      title: 'Create Note03',
      userId: '2',
    };

    await createNoteUseCase.execute(note);
  });

  it('should able to list notes by user', async () => {
    const notes = await listNotesByUserUserCase.execute('4');
    console.log(notes);

    expect(notes).not.toBeNull();
  });
});
