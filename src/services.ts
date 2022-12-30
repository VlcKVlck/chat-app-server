import {mockUsers} from '../assets/mockUsers'
import {Message} from "../types/message";

export function getUserNAme (userId:number){
    for (const item of mockUsers()){
        if (item.id === userId)
            return item.name;
    }
}

export function updateLike (messageId, userId, like, mockMessages){
    for (const msg of mockMessages){
        if (msg.id ===messageId){
            like ? msg.likes.splice(msg.likes.indexOf(userId), 1) : msg.likes.push(userId);
            console.log (msg)
            return msg;
        }
    }
}

export function updateNewMessage (receivedMsg:Message){
    const msg:Message = receivedMsg;
    msg.likes=[];
    msg.status='ok';
    msg.authorName = getUserNAme (msg.authorId);
    return msg;
}