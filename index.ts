import express, { Express, Request, Response, NextFunction } from 'express';
import { getBooks, getBookById, deleteBook, addBook, updateBook} 
from './server/api/books'
import path from 'path'
//knex
import knex from 'knex'
import { Model } from 'objection';
//endknex
import upload from './server/middleware/multer'
import uploadOnMemory from './server/middleware/multerMemory'

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

//setup view engine
app.use("/public", express.static(path.resolve(__dirname, 'public')));
app.set('views', path.join(__dirname, './server/views'))
app.set('view engine', 'ejs')

app.use(express.json())

//middleware
function isAdmin(req:Request, res:Response, next:NextFunction){
    if(req.query.iam === "admin"){
        next();
        return
    }

    res.status(401).send("kamu bukan admin!")
}

app.get('/', (req: Request, res: Response) => {
    res.render('index', {
        name: req.query.name || 'Guest'
    })
})
// listing all data (overview)
app.get("/api/v1/books", getBooks)
// get detail specific data by id
app.get("/api/v1/books/:id", getBookById)
// add new data
app.post("/api/v1/books", uploadOnMemory.single('cover'), addBook)
// update existing data using id 
app.put("/api/v1/books/:id", uploadOnMemory.single('cover'), updateBook)
// delete existing data using id
app.delete("/api/v1/books/:id", deleteBook)
//todo tambahkan endpoint untuk delete dan update

app.listen(port, () => console.log(`app listen on http://localhost:${port}`))