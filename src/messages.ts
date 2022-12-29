import {Router, Request, Response} from "express";
import {mockMessages} from '../assets/mockMessages'
import {Message} from "../types/message"
import {mockUsers} from '../assets/mockUsers'
import {getUserNAme} from './services'
import {updateLike} from './services'
import bodyParser from 'body-parser';
export const messages = Router();

messages.get ('/', (req:Request, res:Response) =>{
    return res.send(mockMessages);
})

messages.post ('/', bodyParser.json(),(req:Request, res:Response)=>{
    const msg:Message = req.body;// How to check for errors here
    msg.likes=[];
    msg.status='ok';
    msg.authorName = getUserNAme (msg.authorId);
    mockMessages.push(msg)
    return res.send(msg)
})

messages.post ('/likes',bodyParser.json(),(req:Request, res:Response)=>{
    const {messageId, userId, like } = req.body;
    // console.log (updateLike (messageId, userId, like))
    return res.send(updateLike (messageId, userId, like));
} )


export default messages;