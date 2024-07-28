import React, { useState } from 'react'
import './login.css'
import { useDispatch, useSelector } from 'react-redux'
import { setLogin } from '../../state'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = () => {
    const [type,setType] = useState('Login')
    const [check,setCheck] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.data.user)
    const navigate = useNavigate();
    const [data,setData] = useState({
        name: '',
        email: '',
        password: ''
    })
    console.log(user)
    const handleChange = (e)=>{
        setData({...data,[e.target.name] : e.target.value})
    }
    console.log(data)
    const handleSubmit = async()=>{
        const response = await axios.post(`http://localhost:4000/api/user/${type.toLowerCase()}`,data)
        console.log(response)
        const data1 = await response.data.data
        if(type.toLowerCase() === 'login'){
            dispatch(setLogin(data1))
        }else{
        }
    }
  return (
    <div className='login'>
        <div className="text">
            <h1>{type}</h1>
        </div>
        <div className="login-info">
            {type=='Login' ? 
            (<>
            <input type="text" value={data.email} onChange={(e)=>handleChange(e)} name="email" placeholder='Your email...' required/>
            <input type="password" value={data.password}  onChange={(e)=>handleChange(e)} name="password"  placeholder='Your password' id="" required />
            </>): (
            <>
            <input type="text" value={data.email}  onChange={(e)=>handleChange(e)} name="email"  placeholder='Your email...'  required/>
            <input type="name" value={data.name} onChange={(e)=>handleChange(e)} name="name" placeholder='Your name' id="" required />
            <input type="password" value={data.password}  onChange={(e)=>handleChange(e)} name="password" id="" placeholder='Your password'  required/></>
            ) }
        </div>
        <div className="login-button">
            <button disabled={check} onClick={()=>handleSubmit()}>{type}</button>
        </div>
        <div className="bottom">
            {type == "Login" ? (
            <p>Create a new account <span onClick={()=>setType("Register")}>Click here</span></p>                
            ): (
                <p>Already account <span onClick={()=>setType("Login")}>Click here</span></p>
            )}
        </div>
    </div>
  )
}

export default Login