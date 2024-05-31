import { Request, Response } from 'express';
import BooksService from "../../../services/bookService"
import { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';
import cloudinary from '../../../middleware/cloudinary';

//knex
async function getBooks(req:Request, res:Response){
    const { q } = req.query
    const books = await BooksService.list(q)

    return res.status(200).json(books)
}
//knexend

async function getBookById(req:Request, res:Response){
    const { id } = req.params

    try{
        const books = await BooksService.get(id)
        return res.status(200).json(books)
    } catch(e) {
        return res.status(404).send("Data tidak ditemukan!")
    }
    
}

async function addBook(req:any, res:Response){
    if(!req.body){
        return res.status(400).send("Invalid Request")
    }

    try{
        const fileUpload = await BooksService.upload(req.file)
        const books = await BooksService.create(
            {
                ...req.body,
                cover: fileUpload.url
            }
        )

        return res.status(201).json(books)
    }catch(e){
        return res.status(400).send("Gagal upload file")
    }
}
//todo : tambahkan fungsi untuk delete dan update
async function deleteBook(req:Request, res:Response){
    const { id } = req.params

    try{
        const books = BooksService.delete(id);
        res.status(200).send("Data berhasil di hapus")
    } catch(e) {
        return res.status(404).send("Data tidak ditemukan!")
    }
}

async function updateBook(req:Request, res:Response){
    const { id } = req.params

    if(!req.file){
        try{
            const books = await BooksService.update(id, req.body)
            return res.status(200).send("Data berhasil di update")
        }catch (e){
            return res.status(404).send("Data tidak ditemukan!")
        }
    }

    try{
        let fileUpload

        try{
            fileUpload = await BooksService.upload(req.file)
        } catch(e){
            return res.status(404).send("Data tidak ditemukan!")
        }

        const books = BooksService.update(id, {
            ...req.body,
            cover: fileUpload.url
        })
        return res.status(200).send("Data berhasil di update")
    } catch(e) {
        return res.status(400).send("Gagal upload file")
    }

}

//todo : export delete dan update
export default {
    getBooks,
    getBookById,
    addBook,
    deleteBook,
    updateBook
}