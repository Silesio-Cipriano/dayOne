import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class GetNoteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const note = await prismaClient.note.findFirst({
      where: {
        id: id,
      },
    });
    return response.json(note);
  }
}
