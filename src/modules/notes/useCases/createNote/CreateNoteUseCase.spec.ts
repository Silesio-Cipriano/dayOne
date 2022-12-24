import { ICreateNoteDTO } from '../../dtos/ICreateNoteDTO';
import { NotesRepositoryInMemory } from '../../repositories/in-memory/NotesRepositoryInMemory';
import { CreateNoteUseCase } from './CreateNoteUseCase';

let notesRepositoryInMemory: NotesRepositoryInMemory;
let createNoteUseCase: CreateNoteUseCase;

describe('Create Note', () => {
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
  });

  it('should able to create note', async () => {
    const newNote = await createNoteUseCase.execute(note);

    expect(newNote).toHaveProperty('id');
  });
});
