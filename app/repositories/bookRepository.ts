import { MaybeCompositeId } from "objection";
import { BooksModel, Books } from "../models/books";

export type booksType = Books;

export default new class BookRepository {
    async create( createArgs: Books ){
        return BooksModel.query().insert(createArgs).returning('*')
    }

    async update(id: MaybeCompositeId, updateArgs: Books){
        return BooksModel.query()
            .where({ id })
            .patch(updateArgs)
            .throwIfNotFound()
            .returning("*");
    }

    async delete(id: MaybeCompositeId){
        return BooksModel.query()
            .deleteById(id)
            .throwIfNotFound()
    }

    async findById(id: MaybeCompositeId){
        return BooksModel.query()
            .findById(id)
            .throwIfNotFound();
    }

    async findAll(){
        const query = BooksModel.query();
        const [total, data] = await Promise.all([
            query.resultSize(),
            query.select()
        ]);

        return {
            data,
            total
        }
    }

    async find(q: string | undefined | string[]){
        const query = BooksModel
            .query()
            .whereLike('title', `%${q}%`)
            .orWhereLike('author', `%${q}%`)
        
        const [total, data] = await Promise.all([
            query.resultSize(),
            query.select()
        ]);
        
        return {
            data,
            total
        }
    }

    async getTotalBooks(){
        return BooksModel.query().count()
    }
}