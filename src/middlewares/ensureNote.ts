import { Prisma } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export async function ensureNote(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.params;

  const noteAlreadyExist = await prismaClient.note.findFirst({
    where: {
      id: id,
    },
  });

  if (!noteAlreadyExist) {
    return response.status(401).json({ error: 'the note not exist!' });
  }

  next();
}
