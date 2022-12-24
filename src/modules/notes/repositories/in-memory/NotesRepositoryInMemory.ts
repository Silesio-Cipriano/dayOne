import { Note } from '@prisma/client';
import { ICreateNoteDTO } from '../../dtos/ICreateNoteDTO';
import { INotesRepository } from '../INotesRepository';

export class NotesRepositoryInMemory implements INotesRepository {
  notes: Note[] = [];

  async create({
    userId,
    title,
    description,
    image = '',
    categoryId,
  }: ICreateNoteDTO): Promise<Note> {
    const note: Note = {
      id: '1' + Math.random() + 100,
      title,
      description,
      image,
      userId,
      categoryId,
      createAt: new Date(),
    };
    this.notes.push(note);

    return note;
  }
  async findById(id: string): Promise<Note | null> {
    const dataNote = this.notes.find((note) => note.id === id);
    const note = dataNote ? dataNote : null;
    return note;
  }
  async findByTitle(title: string): Promise<Note | null> {
    const note = this.notes.find((note) => note.title === title);
    const newNote = note ? note : null;
    return newNote;
  }
  async update(data: ICreateNoteDTO): Promise<Note | null> {
    const newNotes = this.notes.filter((note) => {
      if (note.id === data.id) {
        (note.categoryId = data.categoryId),
          (note.description = data.description),
          (note.image = data.image || '');
        note.title = data.title;
      }
      return note;
    });
    this.notes = [...newNotes];

    let newNote = this.notes.find((note) => note.id === data.id);
    const note = newNote ? newNote : null;
    return note;
  }
  async delete(id: string): Promise<void> {
    const newNotes = this.notes.filter((note) => note.id === id);
    this.notes = [...newNotes];
  }
  async findAll(): Promise<Note[]> {
    return this.notes;
  }
  async findAllByUser(userId: string): Promise<Note[]> {
    const allNotes = this.notes.filter((note) => note.userId === userId);
    return allNotes;
  }
}
