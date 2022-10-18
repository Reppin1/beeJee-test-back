import jwt from 'jsonwebtoken';
import { IUser } from "../controllers/UserContoller/types";
import dotenv from 'dotenv';

dotenv.config({
  path: '../.env',
});

export const createJwtToken = (user: IUser) => {
  const token = jwt.sign(
    {
      user,
    },
    process.env.JWT_SECRET_KEY || '',
    {
      expiresIn: process.env.JWT_MAX_AGE,
      algorithm: 'HS256',
    },
  );
  return token;
};