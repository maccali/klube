import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import TestController from './app/controllers/TestController';

import EventController from './app/controllers/EventController';
import SubscriptionController from './app/controllers/SubscriptionController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/test', TestController.index);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.get('/events', EventController.index);
routes.post('/subscription', SubscriptionController.store);
routes.delete('/subscription', SubscriptionController.delete);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
