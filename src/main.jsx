import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Header from './Components/Header.jsx'
import Navbar from './Components/Navbar.jsx'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home.jsx'
import User from './Components/User.jsx'
import Admin from './Components/Admin.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"admin",
        element:<Admin/>
      },
      {
        path:"user",
        element:<User/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
