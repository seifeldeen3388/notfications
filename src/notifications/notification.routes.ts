import { Router, Request, Response, NextFunction } from 'express';
import Notifications from './notification.model';
import { NotificationService } from './notification.service';

const router = Router();

router
	.route('/')
	.get(NotificationService.getAll)
	.post(NotificationService.create);

export default router;
