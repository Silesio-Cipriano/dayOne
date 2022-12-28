import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateCommentController } from '../modules/notes/useCases/createComment/CreateCommentController';
import { ListCommentsByNoteController } from '../modules/notes/useCases/listCommentByNote/ListCommentByNoteController';

const commentsRoutes = Router();

const createCommentController = new CreateCommentController();
const listCommentsByNoteController = new ListCommentsByNoteController();

commentsRoutes.use(ensureAuthenticated);
commentsRoutes.post('/', createCommentController.handle);
commentsRoutes.get('/note/:noteId', listCommentsByNoteController.handle);

export { commentsRoutes };
