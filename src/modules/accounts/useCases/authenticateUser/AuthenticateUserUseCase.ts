import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../errors/AppError';
import { sendMail } from '../../../../config/email';
interface IRequest {
  email: string;
  password: string;
  urlOrigin: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
    username: string;
    avatar: string;
    birthday: string;
  };
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}
  async execute({ email, password, urlOrigin }: IRequest): Promise<IResponse> {
    const user = await this.repository.findByEmail(email);

    if (!user) throw new AppError('Email or password incorrect', 401);

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new AppError('Email or password incorrect', 401);

    const token = sign({}, 'c7d840cf65a5eb1642510a2670f0cd12', {
      subject: user.id,
      expiresIn: '1d',
    });

    if (user.status === 'BLOCKED') {
      const link = urlOrigin + '/signUp?xns=' + user.id;

      sendMail({ email, name: user.name, link });

      throw new AppError('The email was not validated', 401);
    }

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        username: user.username,
        birthday: user.birthday,
      },
    };
    return tokenReturn;
  }
}
