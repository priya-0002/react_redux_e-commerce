import {ADD_TO_CART} from '../constants'
export const addTOCart=(data)=>{
    return {
     type:ADD_TO_CART,
     dta:data    
    }
}