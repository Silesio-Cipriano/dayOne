import { User } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

type IUser = {
  username: string;
  name: string;
  email: string;
  image: string;
  createAt: Date;
};
@injectable()
export class FindUserByTokenUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(userId: string): Promise<IUser> {
    const user = await this.usersRepository.findById(userId);
    if (!user) throw new AppError('User not exist', 401);

    const userFormatted: IUser = user;
    return user;
  }
}
