import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
export class DeleteCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private repository: ICategoriesRepository
  ) {}
  async execute(id: string) {
    const categoryExist = await this.repository.findById(id);
    if (categoryExist) throw new AppError('Category already exist!', 401);
    await this.repository.delete(id);
  }
}
