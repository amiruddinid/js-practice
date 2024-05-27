import express from 'express'
import controllers from '../app/controllers'
import { authorize } from '../app/middleware/authorization'
import uploadOnMemory from '../app/middleware/multerMemory'

const apiRouter = express.Router()
const appRouter = express.Router()

// appRouter.get('/', (req: Request, res: Response) => {
//     res.render('index', {
//         name: req.query.name || 'Guest'
//     })
// })
//router for APP or view engine
appRouter.get('/', controllers.app.user.index)
appRouter.get('/login', controllers.app.user.loginView)
appRouter.post('/login', controllers.app.user.login)
appRouter.get('/logout', controllers.app.user.logout)


// listing all data (overview)
apiRouter.get("/api/v1/books", authorize, controllers.api.books.getBooks)
// get detail specific data by id
apiRouter.get("/api/v1/books/:id", controllers.api.books.getBookById)
// add new data
apiRouter.post("/api/v1/books", [authorize, uploadOnMemory.single('cover')], controllers.api.books.addBook)
// update existing data using id 
apiRouter.put("/api/v1/books/:id", uploadOnMemory.single('cover'), controllers.api.books.updateBook)
// delete existing data using id
apiRouter.delete("/api/v1/books/:id", controllers.api.books.deleteBook)
//todo tambahkan endpoint untuk delete dan update

apiRouter.post("/api/v1/register", 
    controllers.api.users.register);
apiRouter.post("/api/v1/login", 
    controllers.api.users.login);
apiRouter.get('/api/v1/whoami', authorize, controllers.api.users.whoAmI)

apiRouter.use(controllers.api.main.onLost) //Error404
apiRouter.use(controllers.api.main.onError) //Error500

export default {
    appRouter,
    apiRouter
};