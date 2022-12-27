import { Comment } from '@prisma/client';
import { inject } from 'tsyringe';
import { ICreateCommentDTO } from '../../dtos/ICreateCommentDTO';
import { ICommentsRepository } from '../../repositories/ICommentsRepository';

export class CreateCommentUseCase {
  constructor(
    @inject('CommentsRepository')
    private repository: ICommentsRepository
  ) {}

  async execute({
    description,
    noteId,
    userId,
  }: ICreateCommentDTO): Promise<Comment> {
    const comment = await this.repository.create({
      noteId,
      userId,
      description,
    });
    return comment;
  }
}
