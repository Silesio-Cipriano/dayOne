import 'reflect-metadata';
import { inject } from 'tsyringe';
import { Comment } from '@prisma/client';
import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from '../../../accounts/repositories/IUsersRepository';
import { ICreateCommentDTO } from '../../dtos/ICreateCommentDTO';
import { ICommentsRepository } from '../../repositories/ICommentsRepository';
import { INotesRepository } from '../../repositories/INotesRepository';

export class CreateCommentUseCase {
  constructor(
    @inject('CommentsRepository')
    private repository: ICommentsRepository,

    @inject('NotesRepository')
    private notesRepository: INotesRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    description,
    noteId,
    userId,
  }: ICreateCommentDTO): Promise<Comment> {
    const note = await this.notesRepository.findById(noteId);

    if (!note) {
      throw new AppError('Note not exist ', 404);
    }

    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError('User not exist ', 404);
    }

    const comment = await this.repository.create({
      noteId,
      userId,
      description,
    });
    return comment;
  }
}
