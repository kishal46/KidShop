import React from 'react'
import Image1 from '../Images/Home/books.png'
import Image2 from '../Images/Home/scoolsupplies.png'
import Image3 from '../Images/Home/toy.png'
import '../CSS/Home.css'
import { NavLink } from 'react-router-dom';
const ImageProducts = () => {
  return (
    <div>
        <div class="container text-center">
  <div class="row">
    <div class="col">
      <NavLink to={'/books'}><img src={Image1} id='img'/></NavLink>
    </div>
    <div class="col">
        <NavLink to={'/schoolthinks'}><img src={Image2} id='img'/></NavLink>
    </div>
    <div class="col">
    <NavLink to={'/toys'}><img src={Image3}id='img'/></NavLink>
    </div>
  </div>
</div>
    </div>
  )
}

export default ImageProducts