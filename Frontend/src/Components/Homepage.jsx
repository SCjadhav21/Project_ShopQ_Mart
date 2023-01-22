import React from 'react'
import Navbar from './Navbar'
import Product from './Product/Product';
import Ads from './Advertisement/Ads';

const Homepage = () => {
  return (
    <div>
        <Navbar/>
  <Ads/>
       <Product/>
    </div>
  )
}

export default Homepage