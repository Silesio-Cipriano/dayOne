import { Comment } from '@prisma/client';
import { ICreateCommentDTO } from '../dtos/ICreateCommentDTO';

interface ICommentsRepository {
  create(data: ICreateCommentDTO): Promise<Comment>;
  findCommentById(id: string): Promise<Comment[]>;
  findCommentsByNote(id: string): Promise<Comment[]>;
  findCommentsByUser(id: string): Promise<Comment[]>;
}

export { ICommentsRepository };
