import { expect } from 'chai';
import {updateLike} from './services';
import {testMessage} from './testdata'


describe('test updateLike() function', () => {
    it('should remove a like if a like was given by same user', ()=>{
        const msg = updateLike (1,2, true,testMessage );
        expect (msg.likes).to.have.members([1])
    });
      it('should add a like if no like was given by same user', ()=>{
        const msg1 = updateLike (99,2, false, testMessage);
        expect (msg1.likes).to.have.members([1,2])
    });
})