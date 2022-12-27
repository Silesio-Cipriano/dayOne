import { Comment } from '@prisma/client';
import { prismaClient } from '../../../../database/prismaClient';
import { ICreateCommentDTO } from '../../dtos/ICreateCommentDTO';
import { ICommentsRepository } from '../ICommentsRepository';

export class CommentsRepository implements ICommentsRepository {
  async create({
    description,
    noteId,
    userId,
  }: ICreateCommentDTO): Promise<Comment> {
    const comment = prismaClient.comment.create({
      data: {
        userId,
        description,
        noteId,
      },
    });

    return comment;
  }
  async findCommentById(id: string): Promise<Comment[]> {
    const comment = await prismaClient.comment.findMany({
      where: {
        id,
      },
    });

    return comment;
  }
  async findCommentsByNote(id: string): Promise<Comment[]> {
    const comment = await prismaClient.comment.findMany({
      where: {
        noteId: id,
      },
    });

    return comment;
  }
  async findCommentsByUser(id: string): Promise<Comment[]> {
    const comment = await prismaClient.comment.findMany({
      where: {
        userId: id,
      },
    });

    return comment;
  }
}
