import React from 'react'
import Slide from '../Home/Slide'
import Products from '../Home/Products'
import ImageProducts from '../Home/ImageProducts'
import KidShopFooter from '../Home/Footer'

const Home = () => {
  return (
    <div>
      <Slide/>
      <ImageProducts/>
      <Products/>
      <KidShopFooter/>
    </div>
  )
}

export default Home