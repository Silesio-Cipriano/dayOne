import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UploadUserAvatarUseCase } from './UploadUserAvatarUseCase';

class UploadUserAvatarController {
  async handle(request: Request, response: Response) {
    const { id } = request.user;
    const avatarFile = request.file?.filename + '';

    const uploadUserAvatarUseCase = container.resolve(UploadUserAvatarUseCase);

    await uploadUserAvatarUseCase.execute({
      userId: id,
      avatarFile,
    });

    return response.status(204).send();
  }
}

export { UploadUserAvatarController };
