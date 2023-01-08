import React, { useState, useEffect } from 'react'
import './Slider.css'
import data from './data'

// import useModalContext

import { useModalContext } from '../../useContext/useContext'

function Hero() {

  // closeSubmenu 

    const {closeSubmenu} = useModalContext();

    const handleSubmenu = (e) => {

    if(!e.target.classList.contains('nextSlide' || 'activeSlide' || 'lastSlide' || 'header-nav')){
      closeSubmenu();
    }

    }

   // closeSubmenu 




  const [index,setIndex] = useState(0);
  const [slider,setSlider] = useState(data);


    useEffect(() =>{ 
      const lastIndex = slider.length - 1;
      if(index < 0 ) {
          setIndex(lastIndex);
      }
      if(index > lastIndex){
          setIndex(0);
      }
  },[index, slider])

  useEffect(() => {
      let slider = setInterval(() => {
          setIndex(index + 1);
      },5000);
      return () => {
          clearInterval(slider);
      }
    },[index])

  return (
    <section className='hero-section' onMouseOver={handleSubmenu}>
        <div className='slider-container'>

          {slider.map((slider, sliderIndex) => {

          let position = 'nextSlide';

          if(sliderIndex === index) {
              position = 'activeSlide';
          }

          if(sliderIndex === index - 1 || (index === 0 && sliderIndex === slider.length - 1)) {
              position = 'lastSlide'
          }

            
            const {id,image} = slider;

            return (
              <article className={position} key={id}>
                <img src={image} key={id}></img>
              </article>
              
            )
          })}

        </div>
    </section>
  )
}

export default Hero