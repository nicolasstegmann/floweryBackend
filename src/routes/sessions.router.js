import { Router } from 'express';
import { passportCall } from '../utils/utils.js';
import cookieParser from 'cookie-parser';
import sessionController from '../controllers/sessions.controller.js';
import EnumErrors from '../utils/errorHandler/enum.js';
import FloweryCustomError from '../utils/errorHandler/FloweryCustomError.js';

const router = Router();

router.use(cookieParser(process.env.AUTH_SECRET));

router.post('/register', passportCall('register'), sessionController.register);

router.post('/login', passportCall('login', { session: false }), sessionController.login);

router.post('/resetpassword', passportCall('resetPassword'), sessionController.resetPassword);

router.post('/logout', sessionController.logout);

router.get('/github', passportCall('github', { scope: ['user:email'] }), sessionController.github);

router.get('/githubcallback', passportCall('github'), sessionController.githubCallback);

router.get('/currentuser', passportCall('jwt', { session: false }), sessionController.currentUser);

//handler for invalid routes
router.all('*', (req, res) => {
    FloweryCustomError.createError({
        name: 'Routing Error',
        message: 'Invalid route',
        type: EnumErrors.ROUTING_ERROR.type,
        recievedParams: { route: req.originalUrl },
        statusCode: EnumErrors.ROUTING_ERROR.statusCode
    });    
});

export default router;