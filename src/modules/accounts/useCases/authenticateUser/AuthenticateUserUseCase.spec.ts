import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserCase: AuthenticateUserUseCase;
let userRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate user', () => {
  const user = {
    username: 'Cipriano',
    name: 'Scipriano',
    email: 'scipriano@gmail',
    password: '123',
  };

  beforeEach(async () => {
    userRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserCase = new AuthenticateUserUseCase(userRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);

    await createUserUseCase.execute(user);
  });

  it('should able to autenticate exists user', async () => {
    const autenticateUser = await authenticateUserCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(autenticateUser).toHaveProperty('token');
  });
});
