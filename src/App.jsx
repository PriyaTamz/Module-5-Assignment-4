import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './Component/Nav';
import All from './Component/All';
import Fullstack from './Component/Fullstack';
import Datascience from './Component/Datascience';
import Cyber from './Component/Cyber';
import Career from './Component/Career';



const router = createBrowserRouter([
  {
    path:"/",
    element:<Nav />,
    children: [
      {
        path:"",
        element:<All />
      },
      {
        path:"fullstack",
        element:<Fullstack />
      },
      {
        path:"datascience",
        element:<Datascience />
      },
      {
        path:"cybersecurity",
        element:<Cyber />
      },
      {
        path:"career",
        element:<Career />
      }
    ]
  }

]);


const App = () => {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;