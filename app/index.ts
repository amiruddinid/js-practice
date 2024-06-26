import dotenv from 'dotenv';
const envPath = process.env.NODE_ENV === 'development' ? 
  '.env' : `.env.${process.env.NODE_ENV}`
  
dotenv.config({path: envPath})

import express, { Express } from 'express';
import path from 'path';
import knex from 'knex'
import cors from 'cors';
import { Model } from 'objection';
// import session from 'express-session';
import routes from '../config/routes';
import knexConfig from '../knexfile';

const app: Express = express();

//knex
const knexInstance = knex(knexConfig[process.env.NODE_ENV || "development"])
console.log(knexConfig[process.env.NODE_ENV || "development"])

Model.knex(knexInstance);
//endknex

app.use("/public", express.static(path.resolve(__dirname, 'public')));

// set-up view-engine
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

// set-up express session
// app.set('trust proxy', 1)
// app.use(session({
//     secret: "Rahasia",
//     resave: false,
//     saveUninitialized: false
// }))

app.use(cors());

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use(routes.appRouter)
app.use('/api/v1/', routes.apiRouter)


export default app;