import {Router, Request, Response} from "express";
import {mockMessages} from '../assets/mockMessages'
import {Message} from "../types/message"
import { updateLike, updateNewMessage } from './services'
import bodyParser from 'body-parser';
export const messages = Router();

messages.get ('/', (req:Request, res:Response) =>{
    return res.send(mockMessages);
})

messages.post ('/', bodyParser.json(),(req:Request, res:Response)=>{
    const msg:Message =updateNewMessage (req.body);
    mockMessages.push(msg)
    return res.send(msg)
})

messages.post ('/likes',bodyParser.json(),(req:Request, res:Response)=>{
    const {messageId, userId, like } = req.body;
    return res.send(updateLike (messageId, userId, like));
} )


export default messages;