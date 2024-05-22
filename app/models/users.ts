import { Model, ModelObject } from "objection";

export class UsersModel extends Model {
    id!: number;
    nama!: string;
    email!: string;
    password!: string;
    avatar!: string;
    role!: string;
    created_by!: string;
    updated_by!: string;
    created_at!: string;
    updated_at!: string;

    static get tableName(){
        return "users"
    }
}

export type Users = ModelObject<UsersModel>;