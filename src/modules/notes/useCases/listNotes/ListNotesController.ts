import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListNotesUseCase } from './ListNotesUseCase';

class ListNotesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listNotesUseCase = container.resolve(ListNotesUseCase);
    const notes = await listNotesUseCase.execute();

    console.log(notes);
    return response.json(notes);
  }
}

export { ListNotesController };
