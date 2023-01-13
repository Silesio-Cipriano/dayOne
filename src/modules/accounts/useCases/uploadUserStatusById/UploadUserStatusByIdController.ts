import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UploadUserStatusByIdUseCase } from './UploadUserStatusByIdUseCase';

export class UploadUserStatusByIdController {
  async handle(request: Request, response: Response) {
    const { userId, status } = request.body;
    const uploadUserStatusUseCase = container.resolve(
      UploadUserStatusByIdUseCase
    );

    await uploadUserStatusUseCase.execute(userId, status);

    return response.status(201).send();
  }
}
