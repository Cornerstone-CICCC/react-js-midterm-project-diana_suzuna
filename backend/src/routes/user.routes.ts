import { Router } from 'express';
import userController from '../controllers/user.controller';
import { checkAdmin, checkAuth } from '../middleware/auth.middleware';

const userRouter = Router();

userRouter.get('/', checkAuth, checkAdmin, userController.getAllUsers);
userRouter.get('/:id', checkAuth, userController.getUserById);
userRouter.post('/', checkAuth, checkAdmin, userController.addUser);
userRouter.put('/:id', checkAuth, userController.updateUserById);
userRouter.delete('/:id', checkAuth, checkAdmin, userController.deleteUserById);

export default userRouter;
