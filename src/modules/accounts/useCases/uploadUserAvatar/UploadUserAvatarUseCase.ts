import { User } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { deleteFile } from '../../../../utils/file';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  userId: string;
  avatarFile: string;
}

@injectable()
class UploadUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}
  async execute({ userId, avatarFile }: IRequest) {
    const user = await this.repository.findById(userId);

    if (user) {
      user.image = avatarFile;
      await this.repository.update(user);
      await deleteFile(`./tmp/avatar/${user.image}`);
    }
  }
}

export { UploadUserAvatarUseCase };
