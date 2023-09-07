import './Event.scss';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import { BsSortNumericDownAlt,BsSortNumericDown } from 'react-icons/bs';

export default function Event() {
  return (

       <div className='party'>

    <div className='devoted'>
            <h4>Devoted to wonderful beauty</h4>
            <h2>Events Pricing</h2>
        </div>


        <div className='events'>
            <div className='event'>
                <div> <h1>$16</h1> <h5>pertable</h5> </div>
                
               <h4>Birthday Events</h4>
               <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
               <span>Shop Now</span>
            </div>


            <div className='event'>
                <div> <h1>$16</h1> <h5>pertable</h5> </div>
                
               <h4>Birthday Events</h4>
               <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
               <span>Shop Now</span>
            </div>



            <div className='event'>
                <div> <h1>$16</h1> <h5>pertable</h5> </div>
                
               <h4>Birthday Events</h4>
               <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
               <span>Shop Now</span>
            </div>


        </div>
    </div> 

  )
}
