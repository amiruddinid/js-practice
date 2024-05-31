import express, { Express, Request, Response, NextFunction } from 'express';
import path from 'path';
import knex from 'knex'
import { Model } from 'objection';
import session from 'express-session';
import routes from '../config/routes';

const app: Express = express();

//knex
const knexInstance = knex({
    client: "postgresql",
    connection: {
        database: "book_store",
        user: "postgres",
        password: "1234",
        port: 5433
    }
})
const port = 5000;

Model.knex(knexInstance);
//endknex

app.use("/public", express.static(path.resolve(__dirname, 'public')));

// set-up view-engine
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

// set-up express session
app.set('trust proxy', 1)
app.use(session({
    secret: "Rahasia",
    resave: false,
    saveUninitialized: false
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routes.appRouter)
app.use('/api/v1/', routes.apiRouter)


export default app;