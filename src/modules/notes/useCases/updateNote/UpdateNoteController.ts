import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateNoteUseCase } from './UpdateNoteUseCase';

export class UpdateNoteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, description, categoryId } = request.body;
    const { id: userId } = request.user;

    const updateNote = container.resolve(UpdateNoteUseCase);

    const note = await updateNote.execute({
      id,
      userId,
      title,
      description,
      categoryId,
    });

    return response.json(note);
  }
}
