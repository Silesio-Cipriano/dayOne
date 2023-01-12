import { User } from '@prisma/client';
import { prismaClient } from '../../../../database/prismaClient';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  async updateStatusToActive(id: string): Promise<void> {
    await prismaClient.user.update({
      where: {
        id,
      },
      data: {
        status: 'ACTIVE',
      },
    });
  }
  async findByUsername(username: string): Promise<User | null> {
    const user = await prismaClient.user.findFirst({
      where: {
        username,
      },
    });

    return user;
  }
  async create({
    username,
    name,
    email,
    password,
    birthday,
    avatar = '',
  }: ICreateUserDTO): Promise<User> {
    const user = await prismaClient.user.create({
      data: {
        username,
        name,
        password,
        email,
        avatar,
        birthday,
      },
    });
    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = await prismaClient.user.findFirst({
      where: {
        id: id,
      },
    });
    return user;
  }

  async findByName(name: string): Promise<User | null> {
    const user = await prismaClient.user.findFirst({
      where: {
        name: name,
      },
    });
    return user;
  }

  async update({
    id,
    username,
    name,
    email,
    birthday,
    password,
    avatar,
  }: ICreateUserDTO): Promise<User> {
    const user = await prismaClient.user.update({
      where: {
        id: id,
      },
      data: {
        username,
        name,
        email,
        birthday,
        avatar,
        password,
      },
    });
    return user;
  }

  async updateAvatar({ id, avatar }: ICreateUserDTO): Promise<User> {
    const user = await prismaClient.user.update({
      where: {
        id: id,
      },
      data: {
        avatar,
      },
    });
    return user;
  }

  async delete(id: string): Promise<void> {
    await prismaClient.user.delete({
      where: {
        id: id,
      },
    });
  }

  async findAll(): Promise<User[]> {
    const users = await prismaClient.user.findMany();

    return users;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    return user;
  }
}
