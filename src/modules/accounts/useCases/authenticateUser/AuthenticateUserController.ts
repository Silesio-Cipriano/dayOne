import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const url = new URL(
      `${request.protocol}://${request.get('host')}${request.originalUrl}`
    );

    const urlOrigin = url.origin;

    const { email, password } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const token = await authenticateUserUseCase.execute({
      email,
      password,
      urlOrigin,
    });

    return response.json(token);
  }
}
