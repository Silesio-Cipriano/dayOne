import { Note } from '@prisma/client';
import { prismaClient } from '../../../../database/prismaClient';
import { ICreateNoteDTO } from '../../dtos/ICreateNoteDTO';
import { INotesRepository } from '../INotesRepository';

class NotesRepository implements INotesRepository {
  async create({
    userId,
    title,
    description,
    image = '',
  }: ICreateNoteDTO): Promise<Note> {
    const note = await prismaClient.note.create({
      data: {
        userId,
        title,
        description,
        image,
      },
    });

    return note;
  }

  async findById(id: string): Promise<Note | null> {
    const note = await prismaClient.note.findFirst({
      where: {
        id: id,
      },
    });

    return note;
  }

  async update({ id, title, description }: ICreateNoteDTO): Promise<Note> {
    const note = await prismaClient.note.update({
      where: {
        id: id,
      },
      data: {
        title,
        description,
      },
    });

    return note;
  }

  async delete(id: string): Promise<void> {
    await prismaClient.note.delete({
      where: {
        id: id,
      },
    });
  }

  async findAll(): Promise<Note[]> {
    const notes = await prismaClient.note.findMany();
    return notes;
  }

  async findByTitle(title: string): Promise<Note | null> {
    const note = await prismaClient.note.findFirst({
      where: {
        title: title,
      },
    });
    return note;
  }
}
export { NotesRepository };
