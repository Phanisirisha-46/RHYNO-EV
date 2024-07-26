import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom" 
import RootLayout from './RootLayout';
import Login from './components/login/Login'
import Register from './components/register/Register'
import Aboutus from './components/aboutus/Aboutus'
import Home from './components/home/Home';
import RoutingError from './components/RoutingError';
import Userprofile from './components/userprofile/Userprofile'
import Products from './components/products/Products';
import Cart from './components/cart/Cart'
import {Navigate} from 'react-router-dom'
import EditUser from './components/EditUser/EditUser';
import './App.css';
function App() {

  const browserRouter= createBrowserRouter([
  {
    path:'',
    element:<RootLayout/>,
    errorElement:<RoutingError/>,
    
  children:[
    {
      path:'',
      element:<Home/>,
    },
    {
      path:'register',
      element:<Register/>,
    },
    {
      path:'login',
      element:<Login/>,
    },
    {
      path:'aboutus',
      element:<Aboutus/>,
    },
    {
      path:'edit-user',
      element:<EditUser/>,
    },

    {
      path:'user-profile',
      element:<Userprofile/>,
      children:[
        {
          path:'products',
          element:<Products/>,
        },
        {
          path:'cart',
          element:<Cart/>,
        },
        {
          path:'',
          element:<Navigate to={'products'}/>
        },

      ]
    },

  ]
}

])
  return (
    <div>
      <div className='main'>
        <RouterProvider router={browserRouter}/>
  
      </div>
      

    </div>
  )
}

export default App