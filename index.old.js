const express = require('express')
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded())

//routing
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/test", (req, res) => {
    res.send("TEST");
})

//params / path parameter
// mandatory
app.get("/:nama/:jobs", (req, res) => {
    console.log(req.params)
    const { nama, jobs } = req.params
    res.send("Hello World " + nama + " " + jobs);
})

//query / query parameter
// tidak wajib 
app.get("/search", (req, res) => {
    const {q, sort} = req.query
    res.send("sedang mencari " + q + " " + sort);
})  

app.get('/register', (req, res)=>{
    
})

//request body
// POST, PUT, PATCH
app.post('/register', (req, res) => {
    console.log(req.body)
    res.status(201).send("Berhasil Register")
})


app.listen(PORT, () => {
    console.log(`Express sudah berjalan di http://localhost:${PORT}`)
})