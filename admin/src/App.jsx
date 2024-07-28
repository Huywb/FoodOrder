import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/SideBar/SideBar'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Orders/Order'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <hr />
      <div className="app-content">
        <SideBar></SideBar>
        <Routes>
          <Route path='/add' element={<Add></Add>}/>
          <Route path='/list' element={<List></List>}/>
          <Route path='/orders' element={<Order></Order>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
