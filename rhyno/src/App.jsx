import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import RootLayout from './RootLayout';
import Aboutus from './components/aboutus/Aboutus';
import Prebook from './components/prebook/Prebook'; // This is imported but not used in routing
import Home from './components/home/Home';
import RoutingError from './components/RoutingError';
import Contactus from './components/contactus/Contactus.jsx'; // Updated to match route configuration
import SE03 from './routes/SE03.jsx';
import SE03Max from './routes/SE03Max.jsx';
import SE03Lite from './routes/SE03Lite.jsx';
import Privacyp from './routes/Privacyp.jsx';
import CompareTable from './components/comparetable/CompareTable.jsx';
import DetailsForm from './routes/DetailsForm.jsx';
import ScrollToTop from './components/scrolltotop/ScrollToTop.jsx'; // This is imported but not used in routing
import Rentalpage from './routes/Rentalpage.jsx'; // Updated to match route configuration

import './App.css';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RoutingError />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contactus />, // Fixed the name
      },
      {
        path: 'SE03',
        element: <SE03 />,
      },
      {
        path: 'SE03MAX',
        element: <SE03Max />,
      },
      {
        path: 'SE03LITE',
        element: <SE03Lite />,
      },
      {
        path: 'about',
        element: <Aboutus />, // Fixed the name
      },
      {
        path: 'privacy',
        element: <Privacyp />, // Fixed the name
      },
      
      {
        path: 'compare',
        element: <CompareTable />,
      },
      {
        path: 'form',
        element: <DetailsForm />,
      },
      {
        path: 'rentals',
        element: <Rentalpage />, // Fixed the name
      },
    ],
  },
]);

function App() {
  return (
    <div className='main'>
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
