import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateCommentController } from '../modules/notes/useCases/createComment/CreateCommentController';

const commentsRoutes = Router();

const createCommentController = new CreateCommentController();

commentsRoutes.use(ensureAuthenticated);
commentsRoutes.post('/', createCommentController.handle);

export { commentsRoutes };
