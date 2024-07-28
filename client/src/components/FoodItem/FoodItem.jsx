import React, { memo, useMemo, useState } from 'react'
import './fooditem.css'
import { asset } from '../../assets/assets'
import {useSelector,useDispatch} from 'react-redux'
import { addToCart, removeFromCart } from '../../state'
import axios from 'axios'
const FoodItem = ({id,name,price,description,image}) => {

    const cartItem = useSelector((state)=>state.data)
    console.log(cartItem.user)
    const dispatch = useDispatch()
    
    const handleAddToCart = async (id) =>{
        dispatch(addToCart(id))
        await axios.post(`http://localhost:4000/api/cart/add`,{itemId: id,userId:cartItem.user._id},{headers:{"Authorization": cartItem.user.token}})

    }

    const handleRemoveToCart = async (id)=>{
        dispatch(removeFromCart(id))
        await axios.post(`http://localhost:4000/api/cart/remove`,{itemId: id,userId:cartItem.user._id},{headers:{"Authorization": cartItem.user.token}})

    }


  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img className='food-item-image' src={`http://localhost:4000/images/`+image} alt="" />
            {!cartItem.cart[id] ? (
                <img className='add' onClick={()=>handleAddToCart(id)} src={asset.add_icon_white}></img>
            ) : (
                <div className='food-item-counter'>
                    <img onClick={()=>handleRemoveToCart(id)} src={asset.remove_icon_red}></img>
                    <p>{cartItem.cart[id]}</p>
                    <img onClick={()=>handleAddToCart(id)} src={asset.add_icon_green} alt="" />
                </div>
            )}
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={asset.rating_starts} alt="" />
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default memo(FoodItem)