import { Category } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { ICreateCategoryDTO } from '../../dtos/ICreateCategoryDTO';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private repository: ICategoriesRepository
  ) {}
  async execute({ title }: ICreateCategoryDTO): Promise<Category | null> {
    const categoryExist = await this.repository.findByTitle(title);
    if (categoryExist) throw new AppError('Category title already exist!', 401);
    const category = await this.repository.create({ title });

    return category;
  }
}
