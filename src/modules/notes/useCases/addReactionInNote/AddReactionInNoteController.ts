import { Request, Response } from 'express';

export class AddReactionInNoteController {
  async handle(request: Request, response: Response): Promise<Response> {
    return response.json();
  }
}
