import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getData } from './LaptopProduct'

const FilterLaptop = () => {
  
  return (
    <div style={{border:"1px solid red" ,width:"20%",fontSize:"16px"}}>
    <div >
    <div>
    <h1>FILTER COMPONENT</h1>
    </div>

          
       
    
   

         <div>
        <h1>Brand</h1>
         <div>
        <input 
        type="checkbox"
        
       />
       <label>Hp</label>
      
         </div>

         <div>
        <input 
        type="checkbox"
       
      
       />
       <label>Lenovo</label>
      
         </div>

         <div>
        <input 
        type="checkbox"
       
      
       />
       <label>Dell</label>
      
         </div>


         <div>
        <input 
        type="checkbox"
       
      
       />
       <label>Acer</label>
      
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

export default FilterLaptop
