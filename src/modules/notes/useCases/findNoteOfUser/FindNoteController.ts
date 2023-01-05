import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindNoteUseCase } from './FindNoteUseCase';

export class FindNoteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: noteId } = request.params;

    const findNoteUseCase = container.resolve(FindNoteUseCase);

    const note = await findNoteUseCase.execute(noteId);

    return response.json(note);
  }
}
