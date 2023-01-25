import React from 'react'
import Navbar from './Navbar'
import Product from './Product/Product';
import Ads from './Advertisement/Ads';
import Footer from './Footer/Footer';

const Homepage = () => {
  return (
    <div>
        {/* <Navbar/> */}
  <Ads/>
       <Product/>
       {/* <Footer/> */}
    </div>
  )
}

export default Homepage