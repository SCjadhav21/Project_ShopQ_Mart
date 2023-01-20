import React from 'react'
import FilterLaptop from './FilterLaptop'
import LaptopProduct from './LaptopProduct'

const CombineLap = () => {
  return (
    <div  style={{display:"flex",gap:"5px"}} >
    <FilterLaptop/>
    <LaptopProduct/>
      
    </div>
  )
}

export default CombineLap
