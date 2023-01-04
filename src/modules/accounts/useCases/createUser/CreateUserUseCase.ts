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
    private notesRepository: IUsersRepository
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
    const emailExist = await this.notesRepository.findByEmail(email);

    if (emailExist) throw new AppError('Email already used!', 404);

    const passwordHash = await hash(password, 8);

    const user = await this.notesRepository.create({
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
