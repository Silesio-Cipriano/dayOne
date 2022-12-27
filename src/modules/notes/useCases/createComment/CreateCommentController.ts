import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCommentUseCase } from './CreateCommentUseCase';

export class CreateCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId, noteId, description } = request.body;

    const createCommentUseCase = container.resolve(CreateCommentUseCase);

    const comment = await createCommentUseCase.execute({
      description,
      noteId,
      userId,
    });

    return response.json(comment);
  }
}
