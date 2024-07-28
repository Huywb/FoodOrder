import React, { useState } from 'react'
import './order.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setCart } from '../../state'

const Order = () => {
  const cartItem = useSelector((state)=>state.data.cart)
  const foodList = useSelector((state)=>state.data.data)
  const dispatch = useDispatch()
  const [list,setList] = useState([])
  const total = foodList.reduce((total,item)=>{
    if(cartItem[item._id]>0 ){
      return total + item.price * cartItem[item._id] 
    }else{
      return total
    }
  },0)
  const userId = useSelector((state)=>state.data.user)
  const [info,setInfo] = useState({
    firstname: '',
    lastname:'',
    email:'',
    phone:'',
    street:'',
    city:'',
    items: foodList,
    amount:total,
    quatity:cartItem,
    userId: userId._id
  })
  console.log(info)
  const InfoHandleChange = (e)=>{
    setInfo({...info,[e.target.name]:e.target.value})
  }
  
  const handleSubmit =async (e)=>{
    e.preventDefault()
    const response = await axios.post(`http://localhost:4000/api/order/add`,info,{headers:{"Authorization": userId.token}})
    if(response.data.success){
      setInfo({firstname: '',
        lastname:'',
        email:'',
        phone:'',
        street:'',
        city:'',
        items: foodList,
        amount:total,
        quatity:cartItem,
        userId: userId._id})
        dispatch(setCart())
    }

  }
  return (
    <form className='place-order' onSubmit={(e)=>handleSubmit(e)}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" onChange={(e)=>InfoHandleChange(e)} value={info.firstname} name='firstname' placeholder='First Name' />
          <input type="text"onChange={(e)=>InfoHandleChange(e)} value={info.lastname} name='lastname' placeholder='Last Name' />
        </div>
        <input type="email"onChange={(e)=>InfoHandleChange(e)} value={info.email} name='email' placeholder='Email address' />
        <input type="text"onChange={(e)=>InfoHandleChange(e)} value={info.street} name='street' placeholder='Street' />
        <input type="text" onChange={(e)=>InfoHandleChange(e)}value={info.city} name='city' placeholder='City' />
        <input type="text"onChange={(e)=>InfoHandleChange(e)} value={info.phone} name='phone' placeholder='Phone' />
      </div>
      <div className="place-order-right">
          <div className="cart-total order-cart">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${total}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${total>0 ? 2 : 0}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>${total>0? total + 2 :0}</p>
              </div>
              <hr />
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
      </div>
    </form>
  )
}

export default Order