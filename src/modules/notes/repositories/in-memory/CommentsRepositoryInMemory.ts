import { Comment } from '@prisma/client';
import { ICommentsRepository } from '../ICommentsRepository';

export class CommentsRepositoryInMemory implements ICommentsRepository {
  comments: Comment[] = [];
  async create(comment: Comment): Promise<Comment> {
    comment.id = '1' + Math.random() + 1000;
    this.comments.push(comment);
    return comment;
  }
  async findCommentById(id: string): Promise<Comment[]> {
    const comments = this.comments.filter((comment) => comment.id === id);
    return comments;
  }
  async findCommentsByNote(id: string): Promise<Comment[]> {
    const comments = this.comments.filter((comment) => comment.noteId === id);
    return comments;
  }

  async findCommentsByUser(id: string): Promise<Comment[]> {
    const comments = this.comments.filter((comment) => comment.userId === id);
    return comments;
  }
}
