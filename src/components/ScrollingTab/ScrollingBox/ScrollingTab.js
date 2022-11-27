import React, { useRef } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ScrollingItem } from '../ScrollingItem/ScrollingItem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ScrollingTab.css'
import Slider from "react-slick"


export const ScrollingTab = () => {
  var itemList = [{"link":"https://m.media-amazon.com/images/I/91kKqnkv9jL._AC_SY200_.jpg",
                  "content":"",
                  "price":"",
                  "old": ""},
                  {"link":"https://m.media-amazon.com/images/I/315p913oL9L._AC_SY200_.jpg",
                  "content":"",
                  "price":"",
                  "old-price": ""},
                  {"link":"https://m.media-amazon.com/images/I/31TuMZvBshL._AC_SY200_.jpg",
                  "content":"",
                  "price":"",
                  "old": ""},
                  {"link":"https://m.media-amazon.com/images/I/41Qi4q8cL+L._AC_SY200_.jpg",
                  "content":"",
                  "price":"",
                  "old": ""},
                  {"link":"https://m.media-amazon.com/images/I/41ll-d59qJL._AC_SY200_.jpg",
                  "content":"",
                  "price":"",
                  "old": ""},
                  {"link":"https://m.media-amazon.com/images/I/319DZdAnEgL._AC_SY200_.jpg",
                  "content":"",
                  "price":"",
                  "old": ""},
                  {"link":"https://m.media-amazon.com/images/I/51ss-ik+1dL._AC_SY200_.jpg",
                  "content":"",
                  "price":"",
                  "old": ""},
                  {"link":"https://m.media-amazon.com/images/I/21wNUazPKRL._AC_SY200_.jpg",
                  "content":"",
                  "price":"",
                  "old": ""},
                  {"link":"https://m.media-amazon.com/images/I/31LX1o25jpL._AC_SY200_.jpg",
                  "content":"",
                  "price":"",
                  "old": ""},
                  {"link":"https://m.media-amazon.com/images/I/31fGtTH83iL._AC_SY200_.jpg",
                  "content":"",
                  "price":"",
                  "old": ""},
                ]
                  
var itemScrollable = [];               

itemList.forEach(function(item){
            itemScrollable.push(<ScrollingItem link = {item["link"]}/>)
      })
var slider2 = useRef(null);  

const IconStyle = {
    height: "100%",
    width: "50px",
    padding: "7px",
    boxSizing: "border-box",
  }

  var settings = {
    accessibility:true,
    autoplay: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows:false,
    responsive:[
      {
      breakpoint:992,
      settings: {slidesToShow: 1,
      slidesToScroll: 1,},
      },
      ]
  };

  return (
    <>
    <div className='scroll'>
    <button className='slick2 arrow prev' onClick={()=>{slider2.current.slickPrev()}}><ArrowBackIosIcon style={IconStyle}/></button>
    <Slider {...settings} ref={slider2} >
          {itemScrollable}
    </Slider>
    <button className='slick2 arrow next' onClick={()=>{slider2.current.slickNext()}}><ArrowForwardIosIcon style={IconStyle}/></button>
    </div>
    </>
  )
}
