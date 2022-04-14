import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { CarouselData } from './CarouselData';
import "./Carousel.css";



const Carousel = ({slides}) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }



  return (

    <>

      <div className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

        {CarouselData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                
              {index === current && (
                <div className='carousel-content'>

                  <div className={index % 2 === 0 ? 'text1' : 'text2'}>
                  <p>{slide.text}</p> 
                  </div>

                  <img src={slide.image} alt="kuce" className='image'  />
                </div>
               
  
              )}
          
            </div>

            


          );

        })}

      </div>


    </>

  )
}

export default Carousel