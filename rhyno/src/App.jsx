import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Aboutus from './components/aboutus/Aboutus';
import Prebook from './components/prebook/Prebook';
import Home from './components/home/Home';
import RoutingError from './components/RoutingError';
import Contactus from './components/contactus/Contactus';
import CompareTable from './components/comparetable/CompareTable';
import Rental from './components/rentals/Rental';
import './App.css';


function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <RoutingError />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/payment',
          element: <Prebook />,
        },
        {
          path: '/contact',
          element: <Contactus />,
        },
        {
          path: '/aboutus',
          element: <Aboutus />,
        },
        {
          path: '/compare-all',
          element: <CompareTable />,
        },
        {
          path: '/rental',
          element: <Rental/>,
        },
   
      ],
    },
  ]);

  return (
    <div>
      <div className='main'>
        <RouterProvider router={browserRouter} />
      </div>
    </div>
  );
}

export default App;
