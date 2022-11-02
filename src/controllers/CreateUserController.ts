import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, name, email, password } = request.body;
    const user = await prismaClient.user.create({
      data: {
        username,
        name,
        password,
        email,
        image: '',
      },
    });
    return response.json(user);
  }
}
