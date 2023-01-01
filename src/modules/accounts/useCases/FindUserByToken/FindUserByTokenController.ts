import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindUserByTokenUseCase } from './FindUserByTokenUseCase';

export class FindUserByTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user;
    const findUserByTokenUseCase = container.resolve(FindUserByTokenUseCase);
    const user = await findUserByTokenUseCase.execute(userId);
    return response.status(201).json(user);
  }
}
