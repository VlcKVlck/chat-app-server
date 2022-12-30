import {Router, Request, Response} from "express";
import {mockUserDetails} from '../assets/mockUserDetails'

export const userDetails = Router();


userDetails.get ('/', (req:Request, res:Response) =>{
    return res.send(mockUserDetails);
})

function validateUserId(userId: number) {
    if (userId < 0 || userId >mockUserDetails.length) {
        throw new Error('No such user ID');
    }
    return userId;
}

userDetails.get('/:id', (req: Request, res: Response) => {
    const id = Number (req.params.id);
    try {
        res.send([mockUserDetails[validateUserId(id-1)]])
    }
    catch (e){
        res.status(404).send(e.message)
    }
})
export default userDetails;