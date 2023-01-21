import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useSearchParams } from 'react-router-dom'
import { getShirt } from '../Redux/action'



const Filter = () => {




   const[searchParams,setSearchParams]=useSearchParams()

  const initialCategory=searchParams.getAll("discount")
  
  const initialSort=searchParams.getAll("sort")

  const[discount,setDiscount]=useState(initialCategory||[])

  const[sort,setSort]=useState(initialSort[0]||"")



 

  const HandleSort=(e)=>{

    setSort(e.target.value)
  }


 const handleFitterDiscount=(e)=>{

  const newCategory=[...discount]

  if(newCategory.includes(e.target.value)){
    // remove it
    newCategory.splice(newCategory.indexOf(e.target.value),1)

  }else{
    newCategory.push(e.target.value)

  }


  setDiscount(newCategory)

 }


 useEffect(()=>{
  let obj={}
  obj.discount=discount
  sort && (obj.sort=sort);
  
  console.log(obj)
  setSearchParams(obj)

 },[discount,setSearchParams,sort])

 


  return (
    <div style={{border:"1px solid red" ,width:"20%",fontSize:"16px"}}>
<h1>FILTER COMPONENT</h1>
        <div >
          
          
        

                
            
          


            


            {/* discount */}


                <div>
                  <h1>Discount</h1>


                  
                  <div>
                              <input 
                              type="checkbox"
                              value="4%"
                              checked={discount.includes("4%")}
                              onChange={handleFitterDiscount}
                            
                            
                            />
                            <label> 4%</label>
                
                  </div>
                      <div>
                            <input 
                            type="checkbox"
                            value="20%"
                            checked={discount.includes("20%")}
                            onChange={handleFitterDiscount}
                          
                        
                            />
                            <label> 20%</label>
                    
                      </div>

                  <div>
                          <input 
                          type="checkbox"
                          value="22%"
                          checked={discount.includes("22%")}
                          onChange={handleFitterDiscount}
                        
                        
                        />
                        <label> 22%</label>
                
                  </div>

                  <div>
                              <input 
                              type="checkbox"
                              value="40%"
                              checked={discount.includes("40%")}
                              onChange={handleFitterDiscount}
                            
                            
                            />
                            <label> 40%</label>
                
                  </div>

                  <div>
                          <input 
                            type="checkbox"
                            value="41%"
                            checked={discount.includes("41%")}
                            onChange={handleFitterDiscount}
                          
                          
                          />
                          <label> 41%</label>
                          
                  </div>

                







                </div>
                <br/>
                <hr/>


      {/* rating */}

      <div>
                  <h1>Product Rating</h1>
                  <div>
                  <input 
                  type="checkbox"
                
                
                />
                <label> 3</label>
                
                  </div>

                  <div>
                  <input 
                  type="checkbox"
                
                
                />
                <label> 5</label>
                
                  </div>

                  <div>
                  <input 
                  type="checkbox"
                
                
                />
                <label> 4</label>
                
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

export default Filter
