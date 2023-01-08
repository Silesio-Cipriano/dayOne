import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateNoteUseCase } from './UpdateNoteUseCase';

export class UpdateNoteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, description, categoryId, authorOfTitle, reaction_EmojiId } =
      request.body;

    const { id: userId } = request.user;

    console.log(authorOfTitle);

    const updateNote = container.resolve(UpdateNoteUseCase);

    const note = await updateNote.execute({
      id,
      userId,
      title,
      description,
      categoryId,
      authorOfTitle,
      reaction_EmojiId,
    });

    return response.json(note);
  }
}
