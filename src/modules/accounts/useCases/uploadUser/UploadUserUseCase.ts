import { User } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { deleteFile } from '../../../../utils/file';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import cloudinary from '../../../../config/cloudinary';
interface IRequest {
  userId: string;
  name: string;
  birthday: string;
}

@injectable()
class UploadUserUseCase {
  constructor(
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}
  async execute({ userId, name, birthday }: IRequest) {
    const user = await this.repository.findById(userId);

    if (user) {
      user.name = name;
      user.birthday = birthday;
      await this.repository.update(user);
    }
  }
}

export { UploadUserUseCase };
