import React from 'react'
import { Products } from '../Products/Products'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import {useViewPort} from '../../hooks/viewPort'
import './ProductList.css'

export const ProductList = () => {

  var block = [[{"id":0,"image":"https://m.media-amazon.com/images/I/913WQ0-v5sL._AC_SY135_.jpg","heading":"FORISING Fashing Watch"},
                {"id":1, "image":"https://m.media-amazon.com/images/I/915pq9zQ5OL._AC_SY135_.jpg","heading":"T Winner Watch"},
                {"id":2, "image":"https://m.media-amazon.com/images/I/81Fgkp+VkmL._AC_SY135_.jpg","heading":"Fashion Analog"},
                {"id":3, "image":"https://m.media-amazon.com/images/I/81q8EvDktLL._AC_SY135_.jpg","heading":"Sharper Image"},],
                [{"id":4, "image":"https://m.media-amazon.com/images/I/81Xzx5PHTFL._AC_SY119_.jpg","heading":"Maggie"},
                {"id":5, "image":"https://m.media-amazon.com/images/I/61MRSjHvHIS._AC_SY119_.jpg","heading":"BRU"},
                {"id":6, "image":"https://m.media-amazon.com/images/I/61NqC4I4WLL._AC_SY119_.jpg","heading":"3M carwash"},
                {"id":7,"image":"https://m.media-amazon.com/images/I/81T7leUDxFL._AC_SY119_.jpg","heading":"Yippie"},],
                [{"id":8,"image":"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg","heading":"Cleaning accessories"},
                {"id":9,"image":"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg","heading":"Tyre and rim care"},
                {"id":10,"image":"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg","heading":"Helmets"},
                {"id":11,"image":"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg","heading":"Vaccum cleaner"},],
                [{"id":12,"image":"https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg","heading":"Fresh"},
                {"id":13,"image":"https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg","heading":"Mobile"},
                {"id":14,"image":"https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg","heading":"Fashion"},
                {"id":15,"image":"https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg","heading":"Electronics"},],
                [{"id":16,"image":"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg","heading":"Claim scratch card"},
                {"id":17,"image":"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg","heading":"Redeem reward"},
                {"id":18,"image":"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_WinMore._SY116_CB627364845_.jpg","heading":"Unlock rewards"},
                {"id":19,"image":"https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay_Rewards/Rewards0.5x._SY116_CB633810016_.jpg","heading":"Explore offers"},],
              ]

  var products =(<>    <div>
    <Products content={block[0]} heading={"Keeping Shopping for"}/>
    </div>
    <div>
    <Products content={block[1]} heading={"Buy Again"}/>
    </div>
    <div>
    <Products content={block[2]} heading={"Car and bike"} buttonMode={"none"}/>
    </div>
    <div>
    <Products content={block[3]} heading={"Shop by category"}/>
    </div></>)

  var ProductStyle = {
    display:'flex',
    width: '100%',
    justifyContent:' space-evenly'
  }

  var settings = {
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 992,
        settings: {
          accessibility:true,
          autoplay: true,
          dots: false,
          infinite: true,
          speed: 1000,
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const breakpoint = 992
  var width = useViewPort();
  if(width < breakpoint)
  {
    console.log(width);
  return (
    <>
    <div className='ProductList'>
      <Slider {...settings} className='product-slider'>
        {products}
    </Slider>
    </div>
  </>)
  }
   else{}
    return(
    <>
    <div className='ProductList slick' style={ProductStyle}>
         {products}
    </div>
    </>);}
