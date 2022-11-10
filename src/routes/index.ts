import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { categoryRoutes } from './categories.routes';
import { notesRoutes } from './notes.routes';
import { usersRoutes } from './users.routes';

const routes = Router();

routes.use('/note', notesRoutes);
routes.use('/user', usersRoutes);
routes.use(authenticateRoutes);
routes.use('/category', categoryRoutes);

export { routes };
