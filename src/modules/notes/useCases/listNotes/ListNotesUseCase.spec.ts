import { ICreateNoteDTO } from '../../dtos/ICreateNoteDTO';
import { NotesRepositoryInMemory } from '../../repositories/in-memory/NotesRepositoryInMemory';
import { CreateNoteUseCase } from '../createNote/CreateNoteUseCase';
import { ListNotesUseCase } from './ListNotesUseCase';

let notesRepositoryInMemory: NotesRepositoryInMemory;
let createNoteUseCase: CreateNoteUseCase;
let listNotesUseCase: ListNotesUseCase;

describe('List all notes', () => {
  const note: ICreateNoteDTO = {
    categoryId: '1',
    image: '',
    description: 'new note',
    title: 'Create Note',
    userId: '1',
  };
  beforeEach(async () => {
    notesRepositoryInMemory = new NotesRepositoryInMemory();
    createNoteUseCase = new CreateNoteUseCase(notesRepositoryInMemory);
    listNotesUseCase = new ListNotesUseCase(notesRepositoryInMemory);
    await createNoteUseCase.execute(note);
  });

  it('should able to list all notes', async () => {
    const notes = await listNotesUseCase.execute();

    expect(notes).not.toBeNull();
  });
});
