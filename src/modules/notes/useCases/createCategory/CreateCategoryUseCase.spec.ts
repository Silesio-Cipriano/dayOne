import { CategoriesRepositoryInMemory } from '../../repositories/in-memory/CategoriesRepositoryInMemory';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let categoryRepositoryInMemory: CategoriesRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;

describe('Create category', () => {
  beforeEach(() => {
    categoryRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoryRepositoryInMemory
    );
  });

  it('should able to create new category', async () => {
    const category = {
      title: 'Cipriano',
    };

    const newCategory = await createCategoryUseCase.execute({
      title: category.title,
    });

    expect(newCategory).toHaveProperty('id');
  });
});
