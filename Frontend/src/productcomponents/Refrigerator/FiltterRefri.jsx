import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const FiltterRefri = () => {

  const[searchParams,setSearchParams]=useSearchParams()

  
  const initialSort=searchParams.getAll("sort")

 

  const[sort,setSort]=useState(initialSort[0]||"")



 

 const HandleSort=(e)=>{

  setSort(e.target.value)
}
   


useEffect(()=>{
  let obj={}
  
  sort && (obj.sort=sort);
 
  
  setSearchParams(obj)

 },[setSearchParams,sort])


  return (
    
    <div  style={{border:"1px solid red" ,width:"20%",fontSize:"16px"}}>
    <div >
      <div>
      <h1>FILTER COMPONENT</h1>
      </div>

             <div>
          <h1>Price</h1>
          <div >
          <input 
          type="checkbox"/>
         <label>Rs. 10000 - Rs. 19000 (10)</label>
        
          </div>
          <div>
          <input 
          type="checkbox"
         
        
         />
         <label>Rs. 19000 and Above (17)</label>
        
          </div>
             </div>
              <br/>
              <hr/>
         
      


           <div>
          <h1>Brand</h1>
           <div>
          <input 
          type="checkbox"
         
        
         />
         <label>Whirlpool</label>
        
           </div>

           <div>
          <input 
          type="checkbox"
         
        
         />
         <label>LG</label>
        
           </div>

           <div>
          <input 
          type="checkbox"
         
        
         />
         <label>Samsung</label>
        
           </div>

         




           </div>
           <br/>
            <hr/>



            <div>
              <h1>Discount</h1>
              <div>
              <input 
              type="checkbox"
            
            
            />
            <label>       2%</label>
            
              </div>

              <div>
              <input 
              type="checkbox"
            
            
            />
            <label> 3%</label>
            
              </div>

              <div>
              <input 
              type="checkbox"
            
            
            />
            <label> 4%</label>
            
              </div>

             





            </div>
            <br/>
            <hr/>

             <div>
              <h1>Product Rating</h1>
              <div>
              <input 
              type="checkbox"
            
            
            />
            <label> 3 & above</label>
            
              </div>

              <div>
              <input 
              type="checkbox"
            
            
            />
            <label> 2 & above </label>
            
              </div>

              <div>
              <input 
              type="checkbox"
            
            
            />
            <label> 1& above </label>
            
              </div>
             </div>
             <br/>
             <hr/>





            


            



             



             

              








      
    </div>

     <h1>SORT COMPONENT</h1>
           <div onClick={HandleSort}>
              <input type="radio"  value="asc" name="sort"
                defaultChecked={sort==="asc"}
              />
              <label>Ascending</label>
              <br/>

              <input type="radio"  value="desc" name="sort"
                defaultChecked={sort==="desc"}
              />
              <label>Descending</label>
              <br/>
      
        
           </div>

           </div>
      
    
  )
}

export default FiltterRefri
