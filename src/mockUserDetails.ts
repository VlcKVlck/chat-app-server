import {Router, Request, Response} from "express";
import {mockUserDetails} from '../assets/mockUserDetails'


export const userDetails = Router();


userDetails.get ('/', (req:Request, res:Response) =>{
    return res.send(mockUserDetails);
})

export default userDetails;