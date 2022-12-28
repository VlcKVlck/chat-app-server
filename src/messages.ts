import {Router, Request, Response} from "express";
import {mockMessages} from '../assets/mockMessages'


export const messages = Router();


messages.get ('/', (req:Request, res:Response) =>{
    return res.send(mockMessages);
})

export default messages;