import { Category } from '@prisma/client';
import { prismaClient } from '../../../../database/prismaClient';
import { ICreateCategoryDTO } from '../../dtos/ICreateCategoryDTO';
import { ICategoriesRepository } from '../ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  async delete(id: string): Promise<void> {
    await prismaClient.category.delete({
      where: {
        id,
      },
    });
  }
  async create({ title }: ICreateCategoryDTO): Promise<Category|null> {
    const category=await prismaClient.category.create({
      data: {
        title: title,
      },
    });

    return category;
  }
  async findByTitle(title: string): Promise<Category | null> {
    const category = await prismaClient.category.findFirst({
      where: {
        title: title,
      },
    });

    return category;
  }
  async findById(id: string): Promise<Category | null> {
    const category = await prismaClient.category.findFirst({
      where: {
        id,
      },
    });
    return category;
  }
}
