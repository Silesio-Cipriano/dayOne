import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteCategoryUseCase } from './DeleteCategoryUseCase';

export class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const deleteCategoryUseCase = container.resolve(DeleteCategoryUseCase);
    await deleteCategoryUseCase.execute(id);

    return response.status(200).send(200);
  }
}
