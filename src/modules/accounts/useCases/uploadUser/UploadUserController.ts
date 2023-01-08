import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UploadUserUseCase } from './UploadUserUseCase';

class UploadUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.user;
    const { name, birthday } = request.body;

    const uploadUserUseCase = container.resolve(UploadUserUseCase);

    await uploadUserUseCase.execute({
      userId: id,
      name,
      birthday,
    });

    return response.status(204).send();
  }
}

export { UploadUserController };
