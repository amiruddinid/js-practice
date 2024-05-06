const express = require('express')
const { getBooks, getBookById, addBook} = require('./server/api/books')
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json())

//routing
app.get("/", (req, res) => {
    res.send("Selamat datang di Perpus!");
})

app.get("/api/v1/books", getBooks)
app.get("/api/v1/books/:id", getBookById)
app.post("/api/v1/books", addBook)
//todo tambahkan endpoint untuk delete dan update

app.listen(PORT, () => {
    console.log(`Express sudah berjalan di http://localhost:${PORT}`)
})