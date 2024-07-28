import React, { useEffect, useState } from 'react'
import './myorders.css'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { asset } from '../../assets/assets'

const MyOrders = () => {
    const user = useSelector((state)=>state.data.user)
    const [data,setData] = useState([])
    const [num,setNum] = useState(1)
    console.log(user)

    const getOrder = async ()=>{
        const response = await axios.get(`http://localhost:4000/api/order/${user._id}`,{headers:{"Authorization": user.token}})
        console.log(response)
        setData(response.data.data)
    }
    console.log(data)
    useEffect(()=>{
        if(user.token){
        getOrder()}
    },[user.token])
  return (
    <div className='order-container'>
        <h2>My orders</h2>
        <div className='order-items'>
            {data.map((order,index)=>(
                (index < (num * 8 -1)? (
                    <>
                <div className="order-item" key={index}>
                    <img src={asset.bag_icon} alt="" />
                    {order.items.map((item,index)=>{
                        if(index===order.items.length-1){
                            return item.name 
                        }else{
                            return item.name + ','
                        }
                    })}
                    <p>${order.amount}.00</p>
                    <p>Item:{order.quatity.length}</p>
                    <p>{order.status}</p>
                    <button>Track Order</button>
                </div>
                <span>Date: {order.date.slice(0,10).split(`-`).reverse().join(`-`)}</span>
                </>
                ) : (
                    <></>
                ))
                
            ))}
        </div>
        <div className="show">
        <button className='show-more' onClick={()=>setNum((prev)=>prev+1)} disabled={data.length<num * 8 -1?true:false}>Load more</button>
        <button className='show-more' onClick={()=>setNum((prev)=>prev-1)} disabled={data.length>num * 8 -1?true:false}>Load less</button>
        </div>
    </div>
  )
}

export default MyOrders