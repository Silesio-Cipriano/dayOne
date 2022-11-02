import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';
export class CreateNoteController {
  async handle(request: Request, response: Response) {
    const { title, description, userId } = request.body;

    const userAlreadyExist = await prismaClient.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!userAlreadyExist)
      return response.status(401).json({
        error: 'User not exist',
      });

    const noteAlreadyExist = await prismaClient.note.findFirst({
      where: {
        title: title,
      },
    });

    if (noteAlreadyExist)
      return response.status(401).json({
        error: 'Note already exist!',
      });

    const image = '';

    const note = await prismaClient.note.create({
      data: {
        userId,
        title,
        description,
        image,
      },
    });

    return response.json(note);
  }
}
