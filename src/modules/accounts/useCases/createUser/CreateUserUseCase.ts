import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { hash } from 'bcrypt';
import { AppError } from '../../../../errors/AppError';
@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}
  async execute({
    username,
    name,
    email,
    password,
    createAt,
    id,
    avatar,
    birthday,
  }: ICreateUserDTO) {
    const usernameExist = await this.repository.findByUsername(username);

    if (usernameExist) throw new AppError('Username already exist!', 401);

    const passwordHash = await hash(password, 8);

    const user = await this.repository.create({
      username,
      name,
      email,
      password: passwordHash,
      birthday,
      avatar,
    });
    return user;
  }
}
