import {createSlice} from '@reduxjs/toolkit'
import { food_list } from '../assets/assets'
import axios from 'axios'
import { useEffect } from 'react'






const initialState = {user: '',
                        token: '',
                        data :'',
                        cart:{}}
export const DataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
        addToCart: (state,actions)=>{
            if(!state.cart[actions.payload]){
            state.cart ={...state.cart,[actions.payload]: 1}
            }else{
                state.cart = {...state.cart,[actions.payload] : state.cart[actions.payload] + 1}
            }
        },
        removeFromCart: (state,actions)=>{
            state.cart = {...state.cart,[actions.payload] : state.cart[actions.payload] - 1}
        },
        setLogin: (state,actions)=>{
            state.user = actions.payload
        },
        setLogout: (state)=>{
            state.user = ''
        },
        setFoodList: (state,actions)=>{
            state.data = actions.payload
        },
        setCart: (state)=>{
            state.cart = ''
        }
    }
}) 

export const {addToCart,removeFromCart,setLogin,setLogout,setFoodList,setCart} = DataSlice.actions
export default DataSlice.reducer