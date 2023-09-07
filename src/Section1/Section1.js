import React from 'react'
import './Section1.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


export default function Section1() {
  return (
    <div className='section1'>
        <Carousel>
        <Carousel.Item className='karuselimg'>
        <img
          className="d-block w-100"
          src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='karusel1'>
    
     <div>
       <h4>Fixed-Height Slider</h4>
       <h1>Excellent bouquets for you</h1>
     </div>

      </div>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item className='karuselimg'>
        <img
          className="d-block w-100"
          src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='karusel1'>
      {/* <img src='https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg'/> */}
     <div>
       <h4>Fixed-Height Slider</h4>
       <h1>Excellent bouquets for you</h1>
     </div>

      </div>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item className='karuselimg'>
        <img
          className="d-block w-100"
          src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='karusel1'>
      {/* <img src='https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg'/> */}
     <div>
       <h4>Floral</h4>
       <h1>Excellent bouquets for you</h1>
     </div>

      </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
    </div>
  )
}
