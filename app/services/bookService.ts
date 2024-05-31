import BookRepository, { booksType } from "../repositories/bookRepository";
import cloudinary from '../middleware/cloudinary';

export default new class BookService {
    async create( requestBody:booksType ){
        return BookRepository.create(requestBody);
    }

    async update(id: string, requestBody:booksType ){
        return BookRepository.update(id, requestBody)
    }

    async delete(id: string){
        return BookRepository.delete(id)
    }

    async get(id: string){
        return BookRepository.findById(id)
    }

    async list(query: any){
        try{
            let books;

            if(!query){
                books = await BookRepository.findAll();
            }else{
                books = await BookRepository.find(query);
            }

            return {
                data: books.data,
                count: books.total
            }

        } catch (err){
            throw err;
        }
    }

    async upload(file: any){
        const fileBase64 = file?.buffer.toString("base64")
        const fileString = `data:${file?.mimetype};base64,${fileBase64}`
        try {
            const result = await cloudinary.uploader.upload(fileString)
            return result
        } catch (e){
            throw (e)
        }
    }
}