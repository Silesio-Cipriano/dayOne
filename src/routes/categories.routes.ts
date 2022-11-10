import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateCategoryController } from '../modules/notes/useCases/createCategory/CreateCategoryController';
import { DeleteCategoryController } from '../modules/notes/useCases/deleteCategory/DeleteCategoryController';

const categoryRoutes = Router();

const createCategoryController = new CreateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

categoryRoutes.use(ensureAuthenticated);
categoryRoutes.post('/', createCategoryController.handle);
categoryRoutes.delete('/:id', deleteCategoryController.handle);

export { categoryRoutes };
