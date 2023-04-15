import React from "react";
import Slider from "react-slick";
import "./App.css"
import FullSlider from './FullSlider/FullSlider';
import Slider2 from './Slider2/Slider2';
import Slider3 from './Slider3/Slider3';
export default function App() {




  return (
    <>
      <FullSlider />
      <hr />
      <Slider2 />
      <hr />
      <Slider3 />
    </>
  );
}
