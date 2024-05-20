import express, { Express, Request, Response, NextFunction } from 'express';
import path from 'path';
import knex from 'knex'
import { Model } from 'objection';
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
app.set('views', path.join(__dirname, './server/views'))
app.set('view engine', 'ejs')

app.use(express.json())

app.use(routes)

export default app;