import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { UsersModel } from "../models/users";

export async function authorize(req:any, res:Response, next:NextFunction){
    try {
        const bearerToken = req.headers.authorization;
        const token = bearerToken.split("Bearer ")[1]
        const tokenPayload = jwt.verify(token, "Rahasia") as any;

        req.user = await UsersModel
            .query()
            .findOne({ id : tokenPayload.id })

        next();

    } catch(err) {
        res.status(401).json({
            message: "Unauthorized",
        })
    }
}

export function checkAccess(role: string[]){
    return (req:any, res:Response, next:NextFunction) => {
        if(!role.includes(req.user.role)) {
            return res.status(401).json({
                message: "You cannot access this feature!",
            })
        } 

        next()
    }
}