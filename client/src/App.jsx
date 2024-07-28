import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { RouterProvider } from 'react-router-dom'
import router from './route/route.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app'>
    <Navbar></Navbar>

      <RouterProvider router={router}></RouterProvider>

    </div>
    <Footer></Footer>
    </>
  )
}

export default App
