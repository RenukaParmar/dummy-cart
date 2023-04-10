import React from 'react'
import 'E:/renuka/dummy-cart/src/App.css'
import shopping from '../images/shopping.png';
import phones from '../images/phones.png';
import oppo from '../images/oppo-f19.png';
import Furniture from '../images/furniture.png';
import Groceries from '../images/Groceries.png';
import Thumbnail from '../images/clothes.jpg';
import Thumbnail1 from '../images/watch.jpg';
import Thumbnail2 from '../images/purse.jpg';
import Thumbnail3 from '../images/shoes.jpg';
import {Container,Nav,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Product = () => {
  return (
    <>
    <div className='gridContainer'>
      <a href='#' className='gridItem1'>
      
<div className='gridContent1'>
      Show all Products
</div>
<img src={shopping} className='gridImage1'/>
      </a>
      <a href='#' className='gridItem2'>
<div className='gridContent2'>
Shop for latest smartphones
</div>
<img src={phones} className='gridImage2'/>
      </a>
      <a  href='/phonesbuy' className='gridItem3'>
<div className='gridContent3'>
<h1>Today's deal</h1> 
            <p>OPPO f1</p>
            <h2>$230<span className='dollar280'>$280 </span><span className='offer'>18% off</span></h2> 
</div>
<img src={oppo} className='gridImage3'/>
</a>
      <a href='#' className='gridItem4'>
<div className='gridContent4'>
<p>Shop for furniture</p>
</div>
<img src={Furniture} className='gridImage4'/>
      </a>
      <a href='#' className='gridItem5'>
<div className='gridContent5'>
<p>Upto 70% Off | Styles for Women</p>
</div>
<div className='ImageHead'>
<span className='ImagesFont'><img src={Thumbnail}  className='Image1'/>Dresses
<img src={Thumbnail1}  className='Image2'/> Watches
<img src={Thumbnail2}  className='Image3'/>shoes
<img src={Thumbnail3}  className='Image4'/>Purses</span>
</div>
      </a>
      <a href='#' className='gridItem6'>
<img src={Groceries} className='gridImage6'/>
      </a>
     

    </div>
    </>
  )
}

export default Product
