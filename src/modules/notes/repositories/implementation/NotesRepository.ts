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
    categoryId,
    reaction_EmojiId,
    status,
    authorOfTitle,
  }: ICreateNoteDTO): Promise<Note> {
    const note = await prismaClient.note.create({
      data: {
        authorOfTitle,
        categoryId,
        userId,
        title,
        description,
        image,
        reaction_EmojiId,
        status,
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

  async update({
    id,
    title,
    description,
    authorOfTitle,
    reaction_EmojiId,
  }: ICreateNoteDTO): Promise<Note> {
    const note = await prismaClient.note.update({
      where: {
        id: id,
      },
      data: {
        title,
        description,
        authorOfTitle,
        reaction_EmojiId,
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

  async findAllByUser(userId: string): Promise<Note[]> {
    const notes = await prismaClient.note.findMany({
      where: {
        userId: userId,
      },
    });

    return notes;
  }
}
export { NotesRepository };
