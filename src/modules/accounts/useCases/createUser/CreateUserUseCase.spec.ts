import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from './CreateUserUseCase';
import { hash } from 'bcrypt';

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UsersRepositoryInMemory;
describe('Create user', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });
  it('should be able to create new user', async () => {
    const password = await hash('123', 8);
    const user = {
      username: 'Cipriano',
      name: 'Scipriano',
      email: 'scipriano@gmail',
      password: password,
    };
    await createUserUseCase.execute(user);

    const userCreated = await userRepositoryInMemory.findByUsername(
      user.username
    );

    expect(userCreated).toHaveProperty('id');
  });
});
