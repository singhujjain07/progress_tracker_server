import express from 'express'
import { problemsByRatingController, ratingController, userInfoController } from '../controllers/forcesController.js';

// router object
const router = express.Router();

// get problems
router.get('/problems',problemsByRatingController);
router.get('/rating',ratingController)
router.get('/user-info',userInfoController)


export default router