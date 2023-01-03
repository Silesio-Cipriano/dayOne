import { User } from '@prisma/client';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [
    {
      id: '1',
      username: 'jhonatan',
      name: 'Jhonatan',
      password: '******',
      email: 'jhonatan@gmail.com',
      avatar: 'user.jpg',
      createAt: new Date(),
      birthday: '',
    },
    {
      id: '2',
      username: 'daniel',
      name: 'Daniel',
      password: '******',
      email: 'daniel@gmail.com',
      avatar: 'user.jpg',
      createAt: new Date(),
      birthday: '',
    },
    {
      id: '3',
      username: 'rodrigo',
      name: 'Rodrigo',
      password: '******',
      email: 'rodrigo@gmail.com',
      avatar: 'user.jpg',
      createAt: new Date(),
      birthday: '',
    },
    {
      id: '4',
      username: 'maria',
      name: 'Maria',
      password: '******',
      email: 'maria@gmail.com',
      avatar: 'user.jpg',
      createAt: new Date(),
      birthday: '',
    },
    {
      id: '5',
      username: 'joaquim',
      name: 'Joaquim',
      password: '******',
      email: 'joaquim@gmail.com',
      avatar: 'user.jpg',
      createAt: new Date(),
      birthday: '',
    },
  ];

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
      avatar: '',
      birthday: '',
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
      avatar: '',
      createAt: new Date(),
      birthday: '',
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
