import express from 'express';

const router = express.Router();

// middleware
import { requireSignin, isAdmin } from '../middlewares';

// controllers
import { create } from '../controllers/category';

router.post("/category", requireSignin, isAdmin, create);

export default router;