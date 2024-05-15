import { Model, ModelObject } from "objection";

export class BooksModel extends Model {
    id!: number;
    title!: string;
    author!: string;
    cover!: string;
    price!: number;
    sold!: boolean;

    static get tableName(){
        return "books"
    }
}

export type Books = ModelObject<BooksModel>;