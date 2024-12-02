import React from 'react'
import Navbar from "../componenta/Navbar"
import { Outlet } from 'react-router-dom'
import Footer from '../componenta/Footer'


const RouterLayout = () => {
  return (
      <>
          <header>
            <Navbar />
          </header>
            <main>
             <Outlet />
           </main>
           <Footer/>
      </>
  )
}

export default RouterLayout