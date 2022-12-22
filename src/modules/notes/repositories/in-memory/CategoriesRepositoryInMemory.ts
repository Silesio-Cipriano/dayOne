import { Category } from '@prisma/client';
import { ICreateCategoryDTO } from '../../dtos/ICreateCategoryDTO';
import { ICategoriesRepository } from '../ICategoriesRepository';

export class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async create({ title }: ICreateCategoryDTO): Promise<Category> {
    const category: Category = {
      id: '1' + Math.random() + 100,
      title,
    };

    this.categories.push(category);

    return category;
  }
  async findByTitle(title: string): Promise<Category | null> {
    const category = this.categories.find(
      (category) => category.title === title
    );

    return category || null;
  }
  async findById(id: string): Promise<Category | null> {
    const category = this.categories.find((category) => category.id === id);

    return category || null;
  }
  async delete(id: string): Promise<void> {
    const categories = this.categories.filter((category) => category.id !== id);
    this.categories = categories;
  }
}
