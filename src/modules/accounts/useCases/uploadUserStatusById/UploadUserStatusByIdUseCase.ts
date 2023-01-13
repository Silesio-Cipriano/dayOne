import { User_Status } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
export class UploadUserStatusByIdUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute(userId: string, status: User_Status): Promise<void> {
    const user = await this.usersRepository.findById(userId);

    if (!user) throw new AppError('User not found');

    await this.usersRepository.updateStatus(userId, status);
  }
}
