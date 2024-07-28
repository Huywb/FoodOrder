import React from 'react'
import './exploremenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes carfted with the finest ingredients and culinary expertise</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>(
                <div onClick={()=>setCategory((prev)=>prev===item.menu_name? 'all' : item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name? 'active' : ''}src={item.menu_image} alt="" />
                    <p className={category===item.menu_name? 'text' : ''}>{item.menu_name}</p>
                </div>
            ))}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu