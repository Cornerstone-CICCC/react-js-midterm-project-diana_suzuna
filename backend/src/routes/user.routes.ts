import { Router } from 'express';
import userController from '../controllers/user.controller';
<<<<<<< HEAD

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.post('/', userController.addUser);
userRouter.put('/:id', userController.updateUserById);
userRouter.delete('/:id', userController.deleteUserById);
=======
import { checkAdmin, checkAuth } from '../middleware/auth.middleware';

const userRouter = Router();

userRouter.get('/', checkAuth, checkAdmin, userController.getAllUsers);
userRouter.get('/:id', checkAuth, userController.getUserById);
userRouter.post('/', checkAuth, checkAdmin, userController.addUser);
userRouter.put('/:id', checkAuth, userController.updateUserById);
userRouter.delete('/:id', checkAuth, checkAdmin, userController.deleteUserById);
>>>>>>> backend

export default userRouter;
