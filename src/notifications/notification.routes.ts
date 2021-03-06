import { Router, Request, Response, NextFunction } from 'express';
import { NotificationService } from './notification.service';

const router = Router();

router.route('/').get(NotificationService.getAll);

export default router;
