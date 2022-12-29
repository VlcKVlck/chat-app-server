import {Router, Request, Response} from "express";
import {mockMessages} from '../assets/mockMessages'


export const messages = Router();

messages.get ('/', (req:Request, res:Response) =>{
    return res.send(mockMessages);
})

messages.post ('/', (req:Request, res:Response)=>{
    const msg = req.body;
    mockMessages.push(msg)
    return res.send(mockMessages)
})

export default messages;