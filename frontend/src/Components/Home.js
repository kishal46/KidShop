import React from 'react'
import Slide from '../Home/Slide'
import ImageProducts from '../Home/ImageProducts'
import KidShopFooter from '../Home/Footer'
import Main from '../Home/Products'


const Home = () => {
  return (
    <div>
      <Slide/>
      <ImageProducts/>
      <Main/>
      <KidShopFooter/>
    </div>
  )
}

export default Home