import express from 'express'
import { loginController, registerController, updateCfController, updateLcController } from '../controllers/authController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

// router object
const router = express.Router();

// register
router.post('/register',registerController);

// login
router.post('/login',loginController)

// update lcid
router.put('/update-lc',requireSignIn,updateLcController)

// update cfid
router.put('/update-cf',requireSignIn,updateCfController)

export default router