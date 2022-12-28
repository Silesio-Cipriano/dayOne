import { Comment } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { ICommentsRepository } from '../../repositories/ICommentsRepository';
import { INotesRepository } from '../../repositories/INotesRepository';

@injectable()
export class ListCommentsByNoteUseCase {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository,

    @inject('NotesRepository')
    private notesRepository: INotesRepository
  ) {}
  async execute(noteId: string): Promise<Comment[] | AppError> {
    const note = await this.notesRepository.findById(noteId);

    if (!note) throw new AppError('Note not exist', 404);

    const comments = await this.commentsRepository.findCommentsByNote(noteId);
    return comments;
  }
}
