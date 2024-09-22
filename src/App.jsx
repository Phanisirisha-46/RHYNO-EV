import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Aboutus from './components/aboutus/Aboutus';
import Prebook from './components/prebook/Prebook';
import Home from './components/home/Home';
import RoutingError from './components/RoutingError';
import Contactus from './components/contactus/Contactus';
import SE03 from './routes/SE03';
import Privacy from './components/privacy_policy/Privacy';
import Rental from './components/rentals/Rental';
import Refund from './components/refund_policy/Refund';
import WebsitePolicy from './components/websitePolicy.jsx/WebsitePolicy';
import SE03Lite from './routes/SE03Lite';
import SE03Max from './routes/SE03Max';
import CompareTable from './components/comparetable/CompareTable';
import './App.css';

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '/RHYNO/', // Updated to include the base path
      element: <RootLayout />,
      errorElement: <RoutingError />,
      children: [
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: '', // This will match /RHYNO/
          element: <Home />,
        },
        {
          path: 'payment',
          element: <Prebook />,
        },
        {
          path: 'contact',
          element: <Contactus />,
        },
        {
          path: 'aboutus',
          element: <Aboutus />,
        },
        {
          path: 'rent',
          element: <Rental />,
        },
        {
          path: 'privacy',
          element: <Privacy />,
        },
        {
          path: 'refund',
          element: <Refund />,
        },
        {
          path: 'web',
          element: <WebsitePolicy />,
        },
        {
          path: 'se03',
          element: <SE03 />,
        },
        {
          path: 'se03max',
          element: <SE03Max />,
        },
        {
          path: 'se03lite',
          element: <SE03Lite />,
        },
        {
          path: 'compare',
          element: <CompareTable />,
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
