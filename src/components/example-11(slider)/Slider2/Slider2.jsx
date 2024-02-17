import React from 'react'
import Slider from "react-slick";

import "./Slider2.scss"
export default function Slider2() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    className: "center",
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true, // scroll 'click'-ից հետո
  };
  return (
    <div>
      <h2> Multiple items </h2>
      <Slider {...settings} className='Slider2'>
        {new Array(10).fill().map((_, index) => {
          return (
            <div className="card" key={index}>
              <img className="card-img-top" src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_960_720.jpg" alt="Card  cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="!#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
