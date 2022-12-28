import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCommentsByNoteUseCase } from './ListCommentsByNoteUseCase';

export class ListCommentsByNoteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { noteId } = request.params;
    const listCommentsByNoteUseCase = container.resolve(
      ListCommentsByNoteUseCase
    );
    const comments = await listCommentsByNoteUseCase.execute(noteId);
    return response.json(comments);
  }
}
