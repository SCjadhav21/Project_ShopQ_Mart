import React from 'react'
import FilterMachine from './FilterMachine'
import WasgingMachine from './WasgingMachine'

const CombineMachine = () => {
  return (
    <div style={{display:"flex",gap:"5px"}}>
     <FilterMachine/>
     <WasgingMachine/>
    
      
    </div>
  )
}

export default CombineMachine
