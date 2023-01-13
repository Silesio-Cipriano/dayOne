import { User_Status } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
export class UploadUserStatusByIdUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute(userid: string, status: User_Status): Promise<void> {
    await this.usersRepository.updateStatus(userid, status);
  }
}
