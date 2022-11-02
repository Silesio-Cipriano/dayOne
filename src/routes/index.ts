import { Router } from 'express';
import { notesRoutes } from './notes.routes';
import { usersRoutes } from './users.routes';

const routes = Router();

routes.use('/note', notesRoutes);
routes.use('/user', usersRoutes);

export { routes };
