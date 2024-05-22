import { Request, Response } from 'express';
import { UsersModel } from '../../../models/users';
import { encryptPassword, checkPassword } 
from '../../../utils/encrypt';

async function login(req:Request, res:Response){
    const { email, password } = req.body;
    
    const user = await UsersModel
        .query()
        .findOne({ email })
    
    if(!user){
        return res.status(404)
        .json({
            message: "Email tidak ditemukan!"
        })
    }

    const isPasswordCorrect = await 
        checkPassword(user.password, password)

    if(!isPasswordCorrect){
        return res.status(401)
        .json({
            message: "Password salah!"
        })
    }

    res.status(201).json({
        message: "Berhasil Login",
        data: {
            id: user.id,
            email: user.email,
            nama: user.nama,
            createdAt: user.created_at,
            updatedAt: user.updated_at
        }
    })
}

async function register(req:Request, res:Response){
    const { email, password, nama, avatar } = req.body;
    try{
        const encryptedPassword = await encryptPassword(password)

        const user = await UsersModel.query().insert(
            {
                email, 
                password: encryptedPassword,
                nama,
                role: 'user', 
                avatar
            }        
        )
        res.status(201).json({
            message: "Berhasil Register",
            data: {
                id: user.id,
                email: user.email,
                nama: user.nama,
                createdAt: user.created_at,
                updatedAt: user.updated_at
            }
        })
    } catch(e){
        console.error(e)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export default {
    login,
    register
}