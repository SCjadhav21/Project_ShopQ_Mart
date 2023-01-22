import {
    GET_SHIRT_REQUEST,
    GET_SHIRT_SUCCESS,
    GET_SHIRT_ERROR,
  
} from "./actionType";
  

 const initailState={
    TV:[],
  
    isLoading:false,
    isError:false
 }



 const reducer=(oldstate=initailState,action)=>{
        const {type,payload}=action
       
        switch (type) {

            case GET_SHIRT_REQUEST:
                return{...oldstate,isLoading:true}
            
            
            case  GET_SHIRT_SUCCESS:  
                return{...oldstate,isLoading:false,TV:payload}
                
             
            case  GET_SHIRT_ERROR:  
                return{...oldstate,isLoading:false,isError:true}

                  
                    
        
            default:
                return{...oldstate}
        }
 }

export {reducer}