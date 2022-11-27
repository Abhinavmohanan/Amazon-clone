import React, { useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import c1 from '../../files/MainCarousel/c1.jpg'
import c2 from '../../files/MainCarousel/c2.jpg'
import c3 from '../../files/MainCarousel/c3.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MainCarousel.css';
import Slider from "react-slick"



const MainCarousel = () => {
  var slider = useRef(null);

  const IconStyle = {
    height: "100%",
    width: "50px",
    padding: "7px",
    boxSizing: "border-box",
  }

  var settings = {
    accessibility:true,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
  
  return (
    <>
      <button className='slick arrow prev' onClick={()=>{slider.current.slickPrev()}}><ArrowBackIosIcon style={IconStyle}/></button>
      <Slider {...settings} className="first-slider" ref={slider}>
        <div>
          <img src={c1} alt="c1" className='mainCarousel'></img>
        </div>
        <div>
          <img src={c2} alt="c2" className='mainCarousel'></img>
        </div>
        <div>
          <img src={c3} alt="c3" className='mainCarousel'></img>
        </div>
      </Slider>
      <button className='slick arrow next' onClick={()=>{slider.current.slickNext()}}><ArrowForwardIosIcon style={IconStyle}/></button>
    </>
  )
}

export default MainCarousel