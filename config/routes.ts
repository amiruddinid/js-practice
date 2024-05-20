import express from 'express'
import controllers from '../app/controllers'
import uploadOnMemory from '../app/middleware/multerMemory'

const apiRouter = express.Router()
// const appRouter = express.Router()

// appRouter.get('/', (req: Request, res: Response) => {
//     res.render('index', {
//         name: req.query.name || 'Guest'
//     })
// })

// listing all data (overview)
apiRouter.get("/api/v1/books", controllers.api.books.getBooks)
// get detail specific data by id
apiRouter.get("/api/v1/books/:id", controllers.api.books.getBookById)
// add new data
apiRouter.post("/api/v1/books", uploadOnMemory.single('cover'), controllers.api.books.addBook)
// update existing data using id 
apiRouter.put("/api/v1/books/:id", uploadOnMemory.single('cover'), controllers.api.books.updateBook)
// delete existing data using id
apiRouter.delete("/api/v1/books/:id", controllers.api.books.deleteBook)
//todo tambahkan endpoint untuk delete dan update

apiRouter.use(controllers.api.main.onLost) //Error404
apiRouter.use(controllers.api.main.onError) //Error500

export default apiRouter;