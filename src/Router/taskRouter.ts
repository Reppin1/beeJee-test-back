import express from "express";
import TaskController from "../controllers/TaskController/TaskController";
import passport from "../core/passport";

const router = express.Router();

router.post('/createTask', TaskController.createTask);

router.get('/tasks', TaskController.getTasks);

router.patch('/updateStatusTask', TaskController.updateStatusTask)

router.patch('/updateTaskChanged', passport.authenticate('jwt',{ session: false }), TaskController.updateTaskChanged)

export default router;
