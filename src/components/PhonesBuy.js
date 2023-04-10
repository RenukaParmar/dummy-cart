import React, { useState,useEffect } from 'react';
import 'E:/renuka/dummy-cart/src/App.css'
import oppo1 from '../images/oppo1.jpg';

const PhonesBuy = () => {
    const [data, setdata] = useState(null);

    const fetchData = () => {
      return fetch("http://localhost:3000/phones")
      .then((response) => response.json())
      .then((data) =>
      {
        setdata(data)
        console.log(data)
      } )
    }
    useEffect(() => {
      fetchData();
    },[])

  return (
<>
{
    data?
    <div>
    {
    data.map((item,i)=>
    <div className='row'>
    <div className='col-4 '>
        <img src={oppo1} className='oppoImage1'/>
        </div>
        <div className='col-4'>
            <h1>{item.name}</h1>
    <h2>{item.price}<span className='dollar280'>$300 </span><span className='offer'>20% off</span></h2> 
    <button className='btn btn-secondary me-4'>Add To Cart</button>
            <button className='btn btn-secondary' >Buy Now</button>
            </div>
            

    </div>
    )
    }
    </div>
    :<p>please wait...</p>
}
</>
  )
}
export default PhonesBuy
