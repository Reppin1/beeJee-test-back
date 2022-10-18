import { Request, Response } from "express";
import { Tasks } from "./TaskEntity/entity";

class TaskController {
  static async getTasks(req: Request, res: Response) {
    const task = await Tasks.findBy({})
    return res.status(200).json(task.sort((a, b) =>
      new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()));
  }

  static async createTask(req: Request, res: Response) {
    const newTask = await Tasks.save(req.body);
    return res.status(200).json(newTask);
  }

  static async updateStatusTask(req: Request, res:Response) {
    const findTask = await Tasks.findOne({where: {id: req.body.id}})
    if (findTask) {
      res.status(200).json(await Tasks.save({
        id: req.body.id,
        status: req.body.status
      }));
    } else {
      res.status(404).send("Not found")
    }
  }

  static async updateTaskChanged(req: Request, res:Response) {
    const findTask = await Tasks.findOne({where: {id: req.body.id}})
    if (findTask) {
      res.status(200).json(await Tasks.save({
        id: req.body.id,
        task: req.body.task,
        changed: true
      }));
    } else {
      res.status(404).send("Not found")
    }
  }
}

export default TaskController
