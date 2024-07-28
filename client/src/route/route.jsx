import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import Order from '../pages/Order/Order';
import Login from '../components/Login/Login';
import MyOrders from '../pages/MyOrder/MyOrders';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/cart",
      element: <Cart></Cart>,
    },
    {
      path: "/order",
      element: <Order></Order>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path:'/myorders',
      element: <MyOrders></MyOrders>
    }
  ]);

  export default router