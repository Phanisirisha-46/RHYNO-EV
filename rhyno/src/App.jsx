import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom" 
import RootLayout from './RootLayout';
import Aboutus from './components/aboutus/Aboutus'
import Prebook from './components/prebook/Prebook'
import Home from './components/home/Home';
import RoutingError from './components/RoutingError';
import Contactus from './components/contactus/Contactus';

import './App.css';
function App() {

  const browserRouter= createBrowserRouter([
  {
    path:'',
    element:<RootLayout/>,
    errorElement:<RoutingError/>,
    
  children:[
    {
      path:'/home',
      element:<Home/>,
    },
    {
      path:'',
      element:<Home/>,
    },

    {
      path:'payment',
      element:<Prebook/>,
    },
    {
      path:'contact',
      element:<Contactus/>,
    },

    {
      path:'aboutus',
      element:<Aboutus/>,
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