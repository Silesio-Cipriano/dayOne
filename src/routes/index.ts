import { Request, Response, response, Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { categoryRoutes } from './categories.routes';
import { commentsRoutes } from './comments.routes';
import { notesRoutes } from './notes.routes';
import { usersRoutes } from './users.routes';

const routes = Router();

routes.use(authenticateRoutes);
routes.get('/', (request: Request, response: Response) => {
  return response.status(200).send({
    message: 'project dayOne created by silesio cipriano',
  });
});
routes.use('/user', usersRoutes);
routes.use('/note', notesRoutes);
routes.use('/category', categoryRoutes);
routes.use('/comment', commentsRoutes);

export { routes };
