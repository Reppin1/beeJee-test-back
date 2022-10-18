import express from "express";
import UserController from "../controllers/UserContoller/UserContoller";
import passport from "../core/passport";

const router = express.Router();

router.post('/login', UserController.login)

router.get('/logout', passport.authenticate('jwt',{ session: false }), UserController.logout)

router.get('/auth', passport.authenticate('jwt',{ session: false }), UserController.getMe)

export default router;