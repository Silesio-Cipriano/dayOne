import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class DeleteNoteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    await prismaClient.note.delete({
      where: {
        id: id,
      },
    });

    return response.status(202).send();
  }
}
