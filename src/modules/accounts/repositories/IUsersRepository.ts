import { User, User_Status } from '@prisma/client';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByName(name: string): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
  update(data: ICreateUserDTO): Promise<User | null>;
  updateStatus(userid: string, status: User_Status): Promise<void>;
  delete(id: string): Promise<void>;
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User | null>;
}
