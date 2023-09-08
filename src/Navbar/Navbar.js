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
        <input type="checkbox"  id="check"/>
        <div className='logo'>
        <h3>Fashion Studio</h3>

        </div>
    <div className='menus'>
    <ul>
      <li>  <Link to={'/'}>Home</Link></li>
       <li>    <Link to={'add'}>Products</Link></li>
        <li>    <Link to={'basket'} className='bag' href='#'><HiOutlineShoppingBag/> <sup>{counter}</sup></Link></li>
      </ul>
  



    </div>
    <label for="check">

    <div className='burger' id='btn'><GiHamburgerMenu/></div>
    </label>

    </div>
  )
}
