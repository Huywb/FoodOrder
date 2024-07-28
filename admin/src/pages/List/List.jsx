import React, { useEffect, useState } from 'react'
import './list.css'
import axios from 'axios' 
import {toast} from 'react-toastify'

const List = () => {
  const [list,setList] = useState([])

  const fetchList = async()=>{
    const response = await axios.get(`http://localhost:4000/api/food/list`)
    if(response.data.success){
      setList(response.data.data)
    }else{
      toast.error("Error")
    }
  }

  const removeFood = async(id)=>{
    const response = await axios.delete(`http://localhost:4000/api/food/${id}`)
    if(response){
      toast.success("Delete success")
    fetchList()

    }else{
      toast.error("Error delete")
    }
  }

  useEffect(()=>{
    fetchList()
  },[])
  return (
    <div className='list add flex-col '>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>(
          <div key={index} className='list-table-format'>
            <img src={`http://localhost:4000/images/`+ item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p className='cursor' onClick={()=>removeFood(item._id)}>X</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List