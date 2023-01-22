import {
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_ERROR,
  
} from "./actionTypes";
  

 const initailState={
    cart:[],
    cartItem:0,
    isLoading:false,
    isError:false
 }


 const Cartreducer=(oldstate=initailState,action)=>{
        const {type,payload}=action
        switch (type) {
            case GET_CART_REQUEST:
                return{...oldstate,isLoading:true}
            
            
            case  GET_CART_SUCCESS:  
                return{...oldstate,isLoading:false,cart:payload,cartItem:payload.length}
                
             
            case  GET_CART_ERROR:  
                return{...oldstate,isLoading:false,isError:true}

                  
                    
        
            default:
                return{...oldstate}
        }
 }

export  default Cartreducer