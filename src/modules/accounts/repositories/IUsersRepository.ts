import { User } from '@prisma/client';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByName(name: string): Promise<User | null>;
  update(data: ICreateUserDTO): Promise<User>;
  delete(id: string): Promise<void>;
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User | null>;
}
