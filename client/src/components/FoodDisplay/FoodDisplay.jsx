import React from 'react'
import './fooddisplay.css'
import { useSelector } from 'react-redux'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const foodlist = useSelector((state)=>state.data.data)
    console.log(foodlist)
    const newfoodlist = foodlist.filter((food) =>(category=='all') ? food : food.category == category)
    console.log('data',newfoodlist)

  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {newfoodlist.map((item,index)=>(
                <div key={index}>
                    <FoodItem  id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}></FoodItem>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FoodDisplay