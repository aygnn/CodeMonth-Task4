import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Context } from '../Context/BasketContext';

import { HiOutlineShoppingBag } from 'react-icons/hi';

export default function Navbar() {
  const{counter,setCounter,basket}=useContext(Context)
  // useEffect(()=>{
  //   setCounter(basket.length)
  // },[counter])

  return (
    <div className='navbarr'>
        <div className='logo'>
        <h3>Fashion Studio</h3>

        </div>
    <div className='homes'>
        
    <Link to={'/'}>Home</Link>
    <Link to={'add'}>Products</Link>
    <Link to={'basket'} className='bag' href='#'><HiOutlineShoppingBag/> <sup>{counter}</sup></Link>



    </div>
    <div className='burger'><GiHamburgerMenu/></div>

    </div>
  )
}
