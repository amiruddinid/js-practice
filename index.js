const express = require('express')
const { getBooks, getBookById, addBook, deleteBook, updateBook} = 

require('./server/api/books')
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
app.put("/api/v1/books/:id", updateBook)
app.delete("/api/v1/books/:id", deleteBook)
//todo tambahkan endpoint untuk delete dan update

app.listen(PORT, () => {
    console.log(`Express sudah berjalan di http://localhost:${PORT}`)
})