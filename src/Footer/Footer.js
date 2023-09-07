import React from 'react'
import TextField from '@mui/material/TextField';
import './Footer.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='main'>


      <div className='send'>
        <img src='https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png'/>
      <TextField id="standard-basic" label="Your Email" variant="standard" />
      <span>Send</span>

      </div>

      <div className='about'>
        <h4>About</h4>
        <p>About Us</p>
        <p>Our Partners</p>
        <p>Our Services</p>

        
      </div>

      <div>
      <h4>Contact</h4>
        <p>Contact Us</p>
        <p>FAQ Page</p>
        <p>About Me</p>
      </div>

      <div className='follow'>
        <h4>Follow Us</h4>
      </div>
      </div>
      
   
    </div>
  )
}
