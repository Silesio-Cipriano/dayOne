import { User } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { deleteFile } from '../../../../utils/file';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import cloudinary from '../../../../config/cloudinary';
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
      const url = await cloudinary.cloudinaryUpload(avatarFile);
      console.log(url);

      user.image = url;
      await this.repository.update(user);
    }
    await deleteFile(`./tmp/avatar/${avatarFile}`);
  }
}

export { UploadUserAvatarUseCase };
