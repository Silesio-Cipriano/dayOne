import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { title } = request.body;
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
    const category=await createCategoryUseCase.execute({ title });

    return response.json(category);
  }
}
