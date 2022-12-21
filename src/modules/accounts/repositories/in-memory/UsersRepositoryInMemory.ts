import { User } from '@prisma/client';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    username,
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const randomId = Math.random() + 100;
    const user: User = {
      id: '2' + randomId,
      username,
      name,
      email,
      password,
      createAt: new Date(),
      image: '',
    };
    this.users.push(user);

    return user;
  }
  async findById(id: string): Promise<User | null> {
    const oldUser = this.users.find((user) => user.id === id);
    let user = null;
    user = oldUser ? oldUser : user;
    return user;
  }
  async findByName(name: string): Promise<User> {
    let user: User = {
      id: '',
      username: '',
      name: '',
      password: '',
      email: '',
      image: '',
      createAt: new Date(),
    };
    let oldUser = this.users.find((category) => category.id === name);
    user = oldUser ? oldUser : user;
    return user;
  }
  async findByUsername(username: string): Promise<User | null> {
    const user = this.users.find((user) => user.username === username);
    return user || null;
  }

  async update({
    id,
    username,
    name,
    password,
    email,
  }: ICreateUserDTO): Promise<User | null> {
    let oldUser = this.users.find((user) => user.id === id);
    if (oldUser) {
      const newUsers = this.users;
      newUsers.map((user) => {
        if (user.id === id) {
          (user.username = username),
            (user.name = name),
            (user.password = password);
        }
        oldUser = user ? user : oldUser;
      });
      this.users = newUsers;
    }

    return oldUser || null;
  }
  async delete(id: string): Promise<void> {
    const users = this.users.filter((user) => user.id !== id);
    this.users = users;
  }
  async findAll(): Promise<User[]> {
    const users = this.users;
    return users;
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);
    return user || null;
  }
}
