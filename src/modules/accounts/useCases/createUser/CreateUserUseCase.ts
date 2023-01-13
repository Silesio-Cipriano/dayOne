import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { AppError } from '../../../../errors/AppError';
import { sendMail } from '../../../../config/email';
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
    urlOrigin,
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

    const tokenJwt = sign({}, 'c7d840cf65a5eb1642510a2670f0cd12', {
      subject: '1',
      expiresIn: '1d',
    });

    const link = urlOrigin + '/signUp?xns=' + user.id;

    sendMail({ email, name, link });
    return user;
  }
}
