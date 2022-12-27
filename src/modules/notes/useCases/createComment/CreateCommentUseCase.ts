import { Comment } from '@prisma/client';
import { inject } from 'tsyringe';
import { ICommentsRepository } from '../../repositories/ICommentsRepository';

export class CreateCommentUseCase {
  constructor(
    @inject('CommentsRepository')
    private repository: ICommentsRepository
  ) {}

  async execute(data: Comment): Promise<Comment> {
    const comment = await this.repository.create(data);
    return comment;
  }
}
