import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class UpdateNoteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, description } = request.body;

    const noteAlreadyExist = await prismaClient.note.findFirst({
      where: {
        title: title,
      },
    });

    if (noteAlreadyExist)
      return response.status(401).json({
        error: 'Note already exist!',
      });

    const note = await prismaClient.note.update({
      where: {
        id: id,
      },
      data: {
        title,
        description,
      },
    });
    return response.json(note);
  }
}
