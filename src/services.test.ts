import { expect } from 'chai';
import {updateLike} from './services';


describe('test updateLike() function', () => {
    it('should remove a like if a like was given by same user', ()=>{
        const msg = updateLike (2,5, true);
        
        expect (msg.likes).to.equal([1,2,3,4])
    });
      it('should add a like if no like was given by same user', ()=>{
        const msg = updateLike (1,9, false);

        expect (msg.likes).to.equal([1,2,3,4,5,6,7,8,9])
    });
})