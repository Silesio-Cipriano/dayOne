import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCommentUseCase } from './CreateCommentUseCase';

export class CreateCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { noteId, description, commentedId } = request.body;
    const { id: userId } = request.user;

    const createCommentUseCase = container.resolve(CreateCommentUseCase);

    const comment = await createCommentUseCase.execute({
      description,
      noteId,
      userId,
      commentedId,
    });

    return response.json(comment);
  }
}
