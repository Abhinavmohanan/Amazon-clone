import React from 'react'
import Watch from '../../files/Products/P1/Watch.jpg'
import { useStatevalue } from '../../StateProvider'
import './Products.css'

export const Products = (props,buttonMode) => {

  const [{cart},dispatch] = useStatevalue();

  function pushtoBasket(item){
        dispatch({
            type:'Add_to_Cart',
            item:{
                id:item["id"],
                image:item["image"],
                heading: item["heading"],
                price: item["price"],
                qty:1,
            }
        })
  }

  const products = [];
  props.content.forEach(item => {
    products.push(
        <>
        <div className='pdt'>
            <div className='p1_img'>
                <img src={item["image"]} alt="Watch">
                </img>
            </div>
            <div className='p1_info'>
            {item["heading"]}
            </div>
            <button className='cart-button' onClick={()=> {pushtoBasket(item);}}>Add to cart</button>
        </div>
        </>
    )
  });

  return (
    <>
    <div className='product'>
        <div className='heading'>
            {props.heading}
        </div>
        {products}
    </div>
    </>
  )
}
