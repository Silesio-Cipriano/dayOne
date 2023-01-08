import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, name, email, password, birthday } = request.body;

    const createUser = container.resolve(CreateUserUseCase);
    const user = await createUser.execute({
      username: '',
      name,
      email,
      password,
      birthday,
    });
    return response.json(user);
  }
}
