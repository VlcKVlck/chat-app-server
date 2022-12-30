import express from 'express';
import {users} from './users'
import {messages} from "./messages";
import {userDetails} from "./mockUserDetails";
import cors from 'cors';

const server = express();

server.use(cors());

server.use('/userDetails', userDetails);
server.use('/users', users);
server.use('/messages', messages);


export default server;
