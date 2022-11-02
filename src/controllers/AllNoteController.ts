import { Note } from '@prisma/client';
import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class AllNoteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const all = await prismaClient.note.findMany();
    return response.json(all);
  }
}
