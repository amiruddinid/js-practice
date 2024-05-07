const books = [
    {
        id: 0,
        title: "Buku Harmony",
        isbn: 12312048102,
        price: 20000,
        author: "Qlippoth",
        img: ''
    }
];

function getBooks(req, res){
    let result;
    const { q } = req.query

    if(!q) {
        return res.status(200).json(books)
    }

    result = books.find((el) => {
        console.log(el.title.includes(q))
        return el.title.includes(q)
    })
    

    return res.status(200).json(result)
}

function getBookById(req, res){
    const { id } = req.params
    let result = books.find((el) => el.id == id)

    if(!result) return res.status(404).send("Data tidak ditemukan!")

    return res.status(200).json(result)
}

function addBook(req, res){
    if(!req.body){
        return res.status(400).send("Invalid Request")
    }
    const url = `/public/uploads/${req.file.filename}`
    books.push({
        ...req.body,
        img: url
    })
    return res.status(201).send("Berhasil menambahkan buku")
}
//todo : tambahkan fungsi untuk delete dan update
function deleteBook(req, res){
    const { id } = req.params
    let result = books.findIndex((el) => el.id == id)

    if(!result) return res.status(404).send("Data tidak ditemukan!")

    books.splice(result, 1)

    return res.status(200).send("Data berhasil di hapus")
}

function updateBook(req, res){
    const { id } = req.params
    let result = books.findIndex((el) => el.id == id)
    console.log(result);

    if(result < 0) return res.status(404).send("Data tidak ditemukan!")

    const { isbn, title, author, price } = req.body 

    books[result] = {
        ...books[result],
        isbn: isbn || books[result].isbn,
        title: title || books[result].title,
        author: author || books[result].author,
        price: +price || books[result].price
    }

    return res.status(200).send("Data berhasil di update")
}

//todo : export delete dan update
module.exports = {
    getBooks,
    getBookById,
    addBook,
    deleteBook,
    updateBook
}