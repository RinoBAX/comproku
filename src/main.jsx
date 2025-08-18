import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Services from './pages/Services.jsx';
import Porto from './pages/Porto.jsx';
import ContactUs from './pages/ContactUs.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx'; 
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "layanan",
        element: <Services />,
      },
      {
        path: "layanan/:slug",
        element: <ServiceDetail />,
      },
      {
        path: "portfolio",
        element: <Porto />,
      },
      {
        path: "ContactUs",
        element: <ContactUs />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
