const books = [
    {
        id: 0,
        title: "Buku Harmony",
        isbn: 12312048102,
        price: 20000,
        author: "Qlippoth"
    }
];

function getBooks(req, res){
    let result;
    const { q } = req.query
    if(!q) {
        return res.status(200).json(books)
    }

    result = books.find((el) => el.title === q)
    return res.status(200).json(result)
}

function getBookById(req, res){
    const { id } = req.params
    let result = books.find((el) => el.id === id)
    return res.status(200).json(result)
}

function addBook(req, res){
    if(!req.body){
        return res.status(400).send("Invalid Request")
    }
    books.push(req.body)
    return res.status(201).send("Berhasil menambahkan buku")
}
//todo : tambahkan fungsi untuk delete dan update
function deleteBook(){

}

function updateBook(){

}

//todo : export delete dan update
module.exports = {
    getBooks,
    getBookById,
    addBook
}