import { Request, Response } from "express";
import { User } from "./UserEntity/entity";
import { createJwtToken } from "../../utils/createJwtToken";

class UserController {
  static async login(req: Request, res: Response) {
    const email = req.body.email
    const password = req.body.password
    try {
      const whereQuery = {email: email, password: password};
      const findUser = await User.findOne({
        where: whereQuery
      })
      if(!findUser) {
        return res.status(404).json({message: `Пользователь с login: ${email} не найден`})
      }
      const token = createJwtToken(email);
      res.cookie('jwt', token, {httpOnly: true, maxAge: 360000 * 60 * 60})
      res.send({login: true});
    } catch (e) {
      res.status(500).json({message: 'Error sending sms(Ошибка при отправке)'})
    }
  }
  static async getMe(req: Request, res: Response) {
    const user: any = req.user
    try {
      if(user) {
        const userInfo = await User.findOne({
          where: {
            email: user?.email
          }
        })
        const sendUser = {
          login: true
        }
        return res.json(sendUser)
      }
    } catch (e) {
      return res.json(e)
    }
  }
  static async logout(req: Request, res: Response) {
    try {
      res.clearCookie('jwt')
      res.send({login: false})
    } catch (e) {
      console.log(e)
      res.status(500).json({message: 'Ошибка при выходе'})
    }
  }
}

export default UserController
