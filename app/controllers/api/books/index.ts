import { Request, Response } from 'express';
//knex
import { BooksModel } from '../../../models/books';
//endknex
import { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';
import cloudinary from '../../../middleware/cloudinary';

//knex
async function getBooks(req:Request, res:Response){
    const { q } = req.query

    if(!q) {
        const books = await BooksModel.query();
        return res.status(200).json(books)
    }

    const books = await BooksModel
        .query()
        .whereLike('title', `%${q}%`)
        .orWhereLike('author', `%${q}%`)

    return res.status(200).json(books)
}
//knexend

async function getBookById(req:Request, res:Response){
    const { id } = req.params

    try{
        const books = await BooksModel.query().findById(id).throwIfNotFound();
        return res.status(200).json(books)
    } catch(e) {
        return res.status(404).send("Data tidak ditemukan!")
    }
    
}

async function addBook(req:Request, res:Response){
    if(!req.body){
        return res.status(400).send("Invalid Request")
    }

    const fileBase64 = req.file?.buffer.toString("base64")
    const file = `data:${req.file?.mimetype};base64,${fileBase64}`

    cloudinary.uploader.upload(file, async function(err:UploadApiErrorResponse, 
        result:UploadApiResponse){
        if(!!err){
            console.log(err)
            return res.status(400).send("Gagal upload file")
        }

        const books = await BooksModel.query().insert(
            {
                ...req.body,
                cover: result.url
            }
        ).returning('*')

        return res.status(201).json(books)
    })
}
//todo : tambahkan fungsi untuk delete dan update
async function deleteBook(req:Request, res:Response){
    const { id } = req.params

    try{
        const books = await BooksModel.query().deleteById(id).throwIfNotFound();
        return res.status(200).send("Data berhasil di hapus")

    } catch(e) {
        return res.status(404).send("Data tidak ditemukan!")
    }
}

async function updateBook(req:Request, res:Response){
    const { id } = req.params

    if(!req.file){
        try{
            const books = await BooksModel.query()
                .where({ id })
                .patch(req.body)
                .throwIfNotFound()
                .returning("*");

            return res.status(200).send("Data berhasil di update")
        }catch (e){
            return res.status(404).send("Data tidak ditemukan!")
        }
    }

    const fileBase64 = req.file.buffer.toString("base64")
    const file = `data:${req.file.mimetype};base64,${fileBase64}`

    cloudinary.uploader.upload(file, async function(err:UploadApiErrorResponse, 
        result:UploadApiResponse){
        if(!!err){
            console.log(err)
            return res.status(400).send("Gagal upload file")
        }

        try{
            const books = await BooksModel.query()
                .where({ id })
                .patch({
                    ...req.body,
                    cover: result.url
                })
                .throwIfNotFound()
                .returning("*");

            return res.status(200).send("Data berhasil di update")
        }catch (e){
            return res.status(404).send("Data tidak ditemukan!")
        }
    })
}

//todo : export delete dan update
export default {
    getBooks,
    getBookById,
    addBook,
    deleteBook,
    updateBook
}