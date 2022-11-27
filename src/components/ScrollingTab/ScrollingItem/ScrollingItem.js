import React from 'react'
import phone1 from '../../../files/Products/P2/Phone1.jpg'
import './ScrollingItem.css'

export const ScrollingItem = (props) => {
  return (
    <div className='scrolling-item'>
        <div className='scrolling-product'>
            <img src = {props.link} alt="Phone"></img>
        </div>
        <div className='price'>
            ₹ 52,992.00
        </div>
        <div className='initial-price'>
           M.R.P.:  <strike> ₹85,999.00</strike>
        </div>
    </div>
  )
}
