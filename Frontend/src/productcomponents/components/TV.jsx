import React from 'react'
import Filter from './Filter'
import ProductTv from './ProductTv'


const TVmain = () => {
  return (
    <div style={{display:"flex",gap:"5px"}}>
  
    <Filter/>
    <ProductTv/>
      
    </div>
  )
}

export default TVmain
