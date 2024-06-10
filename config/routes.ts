import express from 'express'
import controllers from '../app/controllers'
import { authorize, checkAccess } from '../app/middleware/authorization'
import uploadOnMemory from '../app/middleware/multerMemory'

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../openapi.json';

const apiRouter = express.Router()
const appRouter = express.Router()

//router for APP or view engine
appRouter.get('/', controllers.app.user.index)
appRouter
    .route('/login')
    .get(controllers.app.user.loginView)
    .post(controllers.app.user.login)

appRouter.get('/logout', controllers.app.user.logout)

//router for REST API
// listing all data (overview)
apiRouter.route("/books")
    .get(controllers.api.books.getBooks) // get book list
    .post(uploadOnMemory.single('cover'), controllers.api.books.addBook) // add book

apiRouter.route("/books/:id")
    .get(controllers.api.books.getBookById) //get books by id
    .put(uploadOnMemory.single('cover'), controllers.api.books.updateBook) //update books
    .delete(controllers.api.books.deleteBook) // delete book

apiRouter.post("/register", controllers.api.users.register);
apiRouter.post("/login", controllers.api.users.login);
apiRouter.get('/whoami', authorize, controllers.api.users.whoAmI)

//OAUTH2 google
apiRouter.post('/auth/google', controllers.api.users.googleAuth)
apiRouter.post('/auth/google/refresh', controllers.api.users.googleAuthRefresh)

apiRouter.use('/api-docs', swaggerUi.serve);
apiRouter.get('/api-docs', swaggerUi.setup(swaggerDocument));

apiRouter.use(controllers.api.main.onLost) //Error404
apiRouter.use(controllers.api.main.onError) //Error500

export default {
    appRouter,
    apiRouter
};