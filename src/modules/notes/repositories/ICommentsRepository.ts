import { Comment } from '@prisma/client';

interface ICommentsRepository {
  create(data: Comment): Promise<Comment>;
  findCommentById(id: string): Promise<Comment[]>;
  findCommentsByNote(id: string): Promise<Comment[]>;
  findCommentsByUser(id: string): Promise<Comment[]>;
}

export { ICommentsRepository };
