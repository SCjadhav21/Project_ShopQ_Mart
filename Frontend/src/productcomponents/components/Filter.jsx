import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useSearchParams } from 'react-router-dom'
import { getShirt } from '../Redux/action'



const Filter = () => {




   const[searchParams,setSearchParams]=useSearchParams()

  // const initialCategory=searchParams.getAll("discount")
  
  const initialSort=searchParams.getAll("sort")
  

  const[discount,setDiscount]=useState([])

  const[sort,setSort]=useState(initialSort[0]||"")

  const[brand,setBrand]=useState([])



 

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

 const handleFitterBrand=(e)=>{

  const newBrand=[...brand]

  if(newBrand.includes(e.target.value)){
    // remove it
    newBrand.splice(newBrand.indexOf(e.target.value),1)

  }else{
    newBrand.push(e.target.value)

  }


  setBrand(newBrand)

 }


 useEffect(()=>{
  let obj={}
  obj.discount=discount
   brand && ( obj.brand=brand)
  sort && (obj.sort=sort);
  
  
  setSearchParams(obj)

 },[discount,setSearchParams,sort,brand])

 


  return (
    <div  className='filtercss'>
         <h1>FILTER COMPONENT</h1>
        <div >
          
          
        

                
            
          


            


            {/* discount */}

            <h1>Discount</h1>
                <div  className='inputbox'>
                 
               

                  
                  <div >
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


                <h1>Brand</h1>
                <div  className='inputbox'>
                 
               

                  
                  <div >
                              <input 
                              type="checkbox"
                              value="TCL"
                              //checked={discount.includes("TCL")}
                              onChange={handleFitterBrand}
                            
                            
                            />
                            <label> TCL</label>
                
                  </div>
                      <div>
                            <input 
                            type="checkbox"
                            value="LG"
                            //checked={discount.includes("LG")}
                            onChange={handleFitterBrand}
                          
                        
                            />
                            <label> LG</label>
                    
                      </div>

                  <div>
                          <input 
                          type="checkbox"
                          value="Sony"
                          //checked={discount.includes("Sony")}
                          onChange={handleFitterBrand}
                        
                        
                        />
                        <label> Sony</label>
                
                  </div>

                  
                







                </div>
                <br/>
                <hr/>          


      {/* rating */}
      <h1>Product Rating</h1>
      <div   className='inputbox'>
                 
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
           <div onClick={HandleSort}  className='inputbox'>
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
