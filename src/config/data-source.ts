import { DataSource } from "typeorm";
import { Tasks } from "../controllers/TaskController/TaskEntity/entity";
import { User } from "../controllers/UserContoller/UserEntity/entity";
import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Tasks, User],
  synchronize: true,
  migrations: ['src/migrations/**/*.ts'],
});
