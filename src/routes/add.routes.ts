import { Router } from 'express';
import { addNumbers } from '../controllers/add.controller';

const router = Router();

router.get('/:a/:b', addNumbers);

export default router;