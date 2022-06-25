import React, { useState, useEffect } from 'react'
// import { slides } from './Data'
import brt from "../image/brt.jpg"
import Slide from './Slide'
import "./Banner"
export default function Banner() {
  const [timeduration] = useState(8000)
  const [play, setPlay] = useState(true)
  const [pos, setPos] = useState(0)
  const slides = [
    {
        subtitle: "Shop Trending T-Shirts that are now on sale!",
        title: "Brain Tonic",
        link: '/shop/shirts/sales',
        img: "data:image/jpeg;base64,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",
        position: 1,
        class: 'white',
        btntext: 'Shop Now'
    },
    {
        subtitle: "Shop Trending T-Shirts that are now on sale!",
        title: "Anti-Hairfall Shampoo",
        link: '/shop/shirts/sales',
        img: 'https://i.imgur.com/0ASbjos.jpg',
        position: 1,
        class: 'white',
        btntext: 'Shop Now'
    },
    {
        subtitle: "Shop Trending T-Shirts that are now on sale!",
        title: "Anti-Dandruff Shampoo",
        link: '/shop/shirts/sales',
        img: 'https://i.imgur.com/0ASbjos.jpg',
        position: 1,
        class: 'white',
        btntext: 'Shop Now'
    },
    {
        subtitle: "Shop Trending T-Shirts that are now on sale!",
        title: "Neem Shampoo with conditioner",
        link: '/shop/shirts/sales',
        img: 'https://i.imgur.com/0ASbjos.jpg',
        position: 1,
        class: 'white',
        btntext: 'Shop Now'
    },
    {
        subtitle: "Shop Trending T-Shirts that are now on sale!",
        title: "Aamla Juice",
        link: '/shop/shirts/sales',
        img: 'https://i.imgur.com/0ASbjos.jpg',
        position: 1,
        class: 'white',
        btntext: 'Shop Now'
    }
]
  const slidesrow = slides?.map((slide, i) => {
    return (
      <Slide
        className={`slide ${slide.class} ${((pos % slides.length) === i) && 'active'}`}
        slide={slide}
        pos={pos} />
    )
  })
  const carouselnavrow = slides.map((slide, i) => {
    return (
      <div
        className={`carouselitem ${((pos % slides.length) === i) && 'activecarouselitem'}`}
        onClick={() => {
          setPos(i);
          setPlay(false);
          setTimeout(() => { setPlay(true) }, 0)
        }}>
        <i className="fal fa-dot-circle"></i>
      </div>
    )
  })
  const [elap, setElap] = useState(0)
  useEffect(() => {
    setPos(0)
  }, [])
  useEffect(() => {
    let timer
    let elap
    if (play) {
      timer = setInterval(() => {
        setPos(prev => prev + 1)
        setElap(0)
      }, timeduration)
      elap = setInterval(() => {
        setElap(prev => prev + 1)
      }, 1)
    } else {
      clearInterval(timer)
      clearInterval(elap)
      setElap(0)

    }
    return () => {
      clearInterval(timer)
      clearInterval(elap)
      setElap(0)
    }
  }, [play, timeduration])

  return (
    <div className="carouselbanner">
      <div className="slides">
        {slidesrow}
      </div>
      <div className="carouselcontrols">
        {carouselnavrow}
      </div>
    </div>
  )
}
