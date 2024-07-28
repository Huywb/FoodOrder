import React, { useState } from 'react'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../state'

const Cart = () => {
  const cartItem = useSelector((state)=>state.data.cart)
  const foodList = useSelector((state)=>state.data.data)
  const dispatch = useDispatch()
  const handleRemoveToCart = async (id)=>{
    dispatch(removeFromCart(id))
  }
  const total = foodList.reduce((total,item)=>{
    if(cartItem[item._id]>0 ){
      return total + item.price * cartItem[item._id] 
    }else{
      return total
    }
  },0)
  return (
    <div className='cart'> 
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {foodList.map((item,index)=>(
            <div key={index}>
              {cartItem[item._id]>0 && (
                <>
                  <div className="cart-items-title cart-items-item">
                    
                    <img src={`http://localhost:4000/images/`+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItem[item._id]}</p>
                    <p>${item.price * cartItem[item._id] }</p>
                    <p onClick={()=>handleRemoveToCart(item._id)} className='cross'>X</p>
                  </div>
                  <hr />
                </>
              )}
            </div>
          ))
            
          }
        </div> 
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${total}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${total > 0  ? 2:0 }</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>${total>0 ? total + 2 :0}</p>
              </div>
              <hr />
            </div>
            <button><a href="/order">PROCEED TO CHECKOUT</a></button>
          </div>
        </div>
    </div>
  )
}

export default Cart