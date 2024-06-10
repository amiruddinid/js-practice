import { Request, Response } from 'express';
import { UsersModel } from '../../../models/users';
import { encryptPassword, checkPassword, createToken } 
from '../../../utils/encrypt';
import { OAuth2Client, UserRefreshClient } from 'google-auth-library';

const CLIENT_ID = '<GOOGLE_CLIENT_ID>'
const CLIENT_SECRET = '<GOOGLE_CLIENT_SECRET>'


const oAuth2Client = new OAuth2Client(
    CLIENT_ID, //client id
    CLIENT_SECRET, // client secret
    'postmessage'
)

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

    const token = await createToken({
        id: user.id,
        email: user.email,
        role: user.role,
        createdAt: user.created_at,
        updatedAt: user.updated_at
    })

    res.status(201).json({
        message: "Berhasil Login",
        data: {
            id: user.id,
            email: user.email,
            nama: user.nama,
            token,
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

async function whoAmI(req:any, res:Response){
    res.status(200).json({
        status: 'OK',
        message: "Success",
        data: req.user
    })
}

async function googleAuth(req:Request, res:Response){
    const  { tokens } = await oAuth2Client.getToken(req.body.code)
    console.log(tokens)

    res.status(200).json(tokens)
}

async function googleAuthRefresh(req:Request, res:Response){
    const user = new UserRefreshClient(
        CLIENT_ID,
        CLIENT_SECRET,
        req.body.refreshToken,
    )
    const { credentials } = await user.refreshAccessToken();
    res.json(credentials)
}

export default {
    login,
    register,
    whoAmI,
    googleAuth,
    googleAuthRefresh
}