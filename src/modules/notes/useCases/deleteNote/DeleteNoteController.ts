import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteNoteUseCase } from './DeleteNoteUseCase';

export class DeleteNoteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const deleteNoteUseCase = container.resolve(DeleteNoteUseCase);

    await deleteNoteUseCase.execute(id);

    return response.status(200).send();
  }
}
