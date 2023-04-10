import React from 'react'
import 'E:/renuka/dummy-cart/src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../images/festival.png';
import laptops from '../images/laptops.png';
import cards from '../images/cards.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar,Button,Carousel} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList,faPlus,faHome,faSearch,faInfo,faCircleInfo,faUtensils,faCartShopping,faHeart} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <>
    <row>
     <Carousel variant="dark flex">
    <Carousel.Item>
    <div className='Header1'>
     <img src={pic} className="festiveImage "/>
     <p className='festiveContent'>Get deals like never before this festive season.</p>
    </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className='Header2'>
     <img src={laptops} className="laptopsImage "/>
     <h4 className='laptopsContent'>Up to 40% off
     <p className='Header2P' >Laptops and Tablets</p></h4>
    </div>    
    </Carousel.Item>
    <Carousel.Item>
    <div className='Header3'>
     <img src={cards} className="cardsImage "/>
     <p className='cardsContent'>Get flat 10% discount on Credit Cards.</p>
    </div>   
     </Carousel.Item>
    </Carousel>
    </row>
    </>
  )
}

export default Header
