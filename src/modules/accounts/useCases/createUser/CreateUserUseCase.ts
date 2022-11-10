import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { hash } from 'bcrypt';
@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}
  async execute({ username, name, email, password }: ICreateUserDTO) {
    const passwordHash = await hash(password, 8);

    const user = await this.repository.create({
      username,
      name,
      email,
      password: passwordHash,
    });
    return user;
  }
}
