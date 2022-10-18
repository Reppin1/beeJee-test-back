import express from "express";
import cors from 'cors';
import { AppDataSource } from "../config/data-source";
import userRouter from "../Router/userRouter";
import taskRouter from "../Router/taskRouter";
import passport from "../core/passport";
import cookieParser from 'cookie-parser';

const PORT = 4000;


AppDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!")
}).catch((error) => {
  console.log(error)
})

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(cookieParser())

app.use(passport.initialize());

app.use('/', userRouter)
app.use('/', taskRouter);


app.listen(PORT, () => console.log('Server start'));