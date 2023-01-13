import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UploadUserAvatarController } from '../modules/accounts/useCases/uploadUserAvatar/UploadUserAvatarController';
import { UploadUserAvatarUseCase } from '../modules/accounts/useCases/uploadUserAvatar/UploadUserAvatarUseCase';

import multer from 'multer';
import uploadConfig from '../config/upload';
import { FindUserByTokenController } from '../modules/accounts/useCases/FindUserByToken/FindUserByTokenController';
import { UploadUserController } from '../modules/accounts/useCases/uploadUser/UploadUserController';
import { UploadUserStatusByIdController } from '../modules/accounts/useCases/uploadUserStatusById/UploadUserStatusByIdController';

const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();
const uploadUserAvatarController = new UploadUserAvatarController();
const uploadUserController = new UploadUserController();
const uploadUserStatusByIdController = new UploadUserStatusByIdController();

const findUserByTokenController = new FindUserByTokenController();

usersRoutes.post('/status', uploadUserStatusByIdController.handle);
usersRoutes.post('/', createUserController.handle);

usersRoutes.use(ensureAuthenticated);
usersRoutes.put('/', uploadUserController.handle);
usersRoutes.patch(
  '/avatar',
  uploadAvatar.single('avatar'),
  uploadUserAvatarController.handle
);
usersRoutes.get('/userByToken', findUserByTokenController.handle);

export { usersRoutes };
