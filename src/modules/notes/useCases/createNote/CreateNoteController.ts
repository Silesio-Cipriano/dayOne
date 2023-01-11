import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateNoteUseCase } from './CreateNoteUseCase';

class CreateNoteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { authorOfTitle, title, description, reaction_EmojiId } =
      request.body;
    const { id: userId } = request.user;
    console.log(
      'Notes: ',
      title,
      description,
      userId,
      reaction_EmojiId,
      authorOfTitle
    );
    const createNoteUseCase = container.resolve(CreateNoteUseCase);
    const note = await createNoteUseCase.execute({
      title,
      description,
      userId,
      reaction_EmojiId,
      authorOfTitle,
    });

    return response.json(note);
  }
}

export { CreateNoteController };
