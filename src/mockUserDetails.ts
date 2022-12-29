import {Router, Request, Response} from "express";
import {mockUserDetails} from '../assets/mockUserDetails'

export const userDetails = Router();


userDetails.get ('/', (req:Request, res:Response) =>{
    return res.send(mockUserDetails);
})


userDetails.get('/:id', (req: Request, res: Response) => {
    const id = Number (req.params.id);
    try {
        // if (id<mockUserDetails.length)
        res.send([mockUserDetails[id-1]])
    }
    catch (e){
        throw new Error('BROKEN')
        // res.status(400).send("No such id")
    }
})
export default userDetails;