import {createUser} from '../controllers/userControllers.js';

import express from 'express';

const router = express.Router();

router.post('/create', createUser);

export default router;