import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
// import ProviderController from './app/controllers/ProviderController';
// import AppointmentsController from './app/controllers/AppointmentController';
// import ScheduleController from './app/controllers/ScheduleController';
// import NotificationController from './app/controllers/NotificationController';
// import AvailableControler from './app/controllers/AvailableController';
import TestController from './app/controllers/TestController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/test', TestController.index);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

// routes.get('/providers', ProviderController.index);
// routes.get('/providers/:providerId/available', AvailableControler.index);

// routes.get('/appointments', AppointmentsController.index);
// routes.post('/appointments', AppointmentsController.store);
// routes.delete('/appointments/:id', AppointmentsController.delete);

// routes.get('/schedule', ScheduleController.index);
// routes.get('/notifications', NotificationController.index);
// routes.put('/notifications/:id', NotificationController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
