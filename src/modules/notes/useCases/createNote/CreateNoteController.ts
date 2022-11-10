import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateNoteUseCase } from './CreateNoteUseCase';

class CreateNoteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, categoryId } = request.body;
    const { id: userId } = request.user;
    const createNoteUseCase = container.resolve(CreateNoteUseCase);
    const note = await createNoteUseCase.execute({
      title,
      description,
      userId,
      categoryId,
    });

    return response.json(note);
  }
}

export { CreateNoteController };
