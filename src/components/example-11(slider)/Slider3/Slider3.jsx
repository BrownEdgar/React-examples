import React from 'react'
import Slider from "react-slick";

import "./Slider3.scss"


export default function Slider3() {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true// scroll 'click'-ից հետո
  };
  return (
    <div>
      <h2> Multiple items with Arrows</h2>
      <Slider {...settings} className='Slider3'>
        {new Array(4).fill().map((_, index) => {
          return (

            <img className="card-img-top" src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Card  cap" key={index} />

          )
        })}
      </Slider>
    </div>
  )
}
