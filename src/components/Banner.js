import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className='relative'>
        <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={3000}
        >

        <div>
            <img loading='lazy' src="https://links.papareact.com/gi1" alt="" />
        </div>

        <div>
            <img loading='lazy' src="https://links.papareact.com/6ff" alt="" />
        </div>
        
        <div>
            <img loading='lazy' src="https://links.papareact.com/7ma" alt="" />
        </div>

        </Carousel>

    </div>
  )
}

export default Banner