import React from 'react'
import { useStatevalue } from '../../StateProvider';
import './Checkout.css';

export const Checkout = () => {
  const [{cart},dispatch] = useStatevalue();

  function increaseQty(item){
        dispatch({
            type:"Add_to_Cart",
            item:item
        })
  }

  function deletefromCart(item){
        dispatch({
        type:"Delete_from_Cart",
        item:item
        })
  }

  function decreaseQty(item){
        dispatch({
            type:"Decrease_from_Cart",
            item:item
            })
  }

  const orders =  []
  if(cart.length !== 0){
  cart.forEach(item => {
    orders.push(<><div className='card-item'>
    <div className='order'>
        <div><img src={item.image} alt="Missing"></img></div>
        <div className='order-details'>
            <div  className='heading-sub'>{item.heading}</div>
            <div className='field-padding'>Price: 2131 (Pack of 1)</div>
            <div className='field-padding'>Qty: {item.qty} <button className='buy-button' onClick={()=>deletefromCart(item)}>Delete</button></div>
            <button className='inc-dec' onClick={()=>increaseQty(item)}>+</button ><button className='inc-dec' onClick={()=>decreaseQty(item)}>-</button>
        </div>
    </div>
    <hr className='order-border'>
    </hr>
</div></>)
  })}
  else{
    console.log(typeof cart.length)
    orders.push(<><div className='card-item'>
    <div className='order'>
        <div className='order-details'>
            <div  className='heading-sub'><br></br>Cart is Empty!</div>
        </div>
    </div>
</div></>)
  }
  function getOrderSize(cart){
    var size =0;
    cart.forEach(element => {
      size += element.qty
    });
    return size;
  }

  return (
    <>
    <div className='total-cart'>
        <div className='cart-list'>
            <div className='heading heading-main'>
                    Shopping Cart
            </div>
            {orders}
        </div>
        <div className='total'>
            <div className='heading'>Subtotal ({getOrderSize(cart)} items): ₹426.00</div>
            <button className='buy-button'>Proceed to buy </button>
        </div>
    </div>
    </>
  )
}
