const express = require('express')
const path = require('path');
const { getBooks, getBookById, addBook, deleteBook, updateBook} = 

require('./server/api/books')
const app = express();

const PORT = process.env.PORT || 8000;

//setup view engine
app.set('views', path.join(__dirname, './server/views'))
app.set('view engine', 'ejs')

app.use(express.json())

//routing
app.get("/", (req, res) => {
    res.render('index', {
        name: req.query.name || 'Guest'
    })
})

//middleware
function isAdmin(req, res, next){
    if(req.query.iam === "admin"){
        next();
        return
    }

    res.status(401).send("kamu bukan admin!")
}

// listing all data (overview)
app.get("/api/v1/books", isAdmin, getBooks)
// get detail specific data by id
app.get("/api/v1/books/:id", getBookById)
// add new data
app.post("/api/v1/books", addBook)
// update existing data using id 
app.put("/api/v1/books/:id", updateBook)
// delete existing data using id
app.delete("/api/v1/books/:id", deleteBook)
//todo tambahkan endpoint untuk delete dan update

app.listen(PORT, () => {
    console.log(`Express sudah berjalan di http://localhost:${PORT}`)
})