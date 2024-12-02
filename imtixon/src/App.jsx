import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouterLayout from './layout/RouterLayout'

import Products from './pages/Products'
import About from './pages/About'
import Blog from './pages/Blog'

import Contacts from './pages/Contacts'


const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<RouterLayout/>,
      children:[
        {
          index:true,
          element:<Products/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
        path:"blog",
        element:< Blog/>
        },
        {
          path:"contacts",
          element:<Contacts/>
        },
     
      ]
    }
  ])
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
