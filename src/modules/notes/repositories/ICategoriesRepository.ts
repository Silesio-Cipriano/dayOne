import { Category } from '@prisma/client';
import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';

interface ICategoriesRepository {
  create({ title }: ICreateCategoryDTO): Promise<Category | null>;
  findByTitle(title: string): Promise<Category | null>;
  findById(id: string): Promise<Category | null>;
  delete(id: string): Promise<void>;
}

export { ICategoriesRepository };
