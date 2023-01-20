import React from 'react'
import FiltterMachine from './FiltterMachine'
import WashingMachine from './Washingmachine'



const CombineWashing = () => {

  return (
    <div style={{display:"flex",gap:"5px"}}>
      <FiltterMachine/>
      <WashingMachine/>
    
      
    </div>
  )
}

export default CombineWashing
