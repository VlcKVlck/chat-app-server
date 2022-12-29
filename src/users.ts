import {Router, Request, Response} from "express";
import {mockUsers} from '../assets/mockUsers'

export const users = Router();

users.get ('/', (req:Request, res:Response) =>{
    return res.send(mockUsers());
})



export default users;