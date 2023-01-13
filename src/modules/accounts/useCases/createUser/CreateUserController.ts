import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, name, email, password, birthday } = request.body;

    const urlOrigin = request.headers.origin;

    const createUser = container.resolve(CreateUserUseCase);
    const user = await createUser.execute({
      username: '',
      name,
      email,
      password,
      birthday,
      urlOrigin,
    });
    return response.json(user);
  }
}
