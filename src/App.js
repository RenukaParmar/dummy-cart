import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from './images/thirteen.svg';
import Header from './components/header'
import Product from './components/Product'
import PhonesBuy from './components/PhonesBuy'
import Footer from './components/Footer'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar,Button} from 'react-bootstrap';
// import { FaBeer,BsSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList,faPlus,faHome,faSearch,faInfo,faCircleInfo,faUtensils,faCartShopping,faHeart} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'

function App() {
  return (
   <>
   <Navbar bg="dark" variant="dark" >
        <Container className='parent'>
          <Navbar href="#" className='dummyLogo'>DummyMart</Navbar>
          <Button className="search">
            {/* <FaBeer/> */}
            {/* <BsSearch/> */}
          <FontAwesomeIcon icon={faSearch} color="black" className='searchIcon'/>
            </Button>
            <FontAwesomeIcon icon={faHeart} color="white" className='FavIcon'/>
            <FontAwesomeIcon icon={faCartShopping} color="white" className='cartIcon'/>
        </Container>
      </Navbar>
   <Header/>
   <Product/>
   <Footer/>
   <Router>
    <Routes>
    {/* <Route exact path='/' element={<Navbar/>}/> */}
      <Route exact path='/phonesbuy' element={<PhonesBuy/>}/>
    </Routes>
   </Router>
   {/* <PhonesBuy/> */}
   </>
  );
}

export default App;
