import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa"
import { BiLogoFacebookCircle } from "react-icons/bi";
import { CiSearch, CiHeart} from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";

const Navbar = () => {
 const active = "text-grey-500 px-4 py-2 bg-green-200 "
  const panding = "text-white px-4 py-2"
  return (
<nav className='container mx-auto w-[100vw] '>
<div className='flex items-center text-center justify-center bg-[white] text-gray-800 px-4 py-2'>
<div className='font-bold'><h1 className='text-3xl text-green-800'>SEEDRA</h1></div>

<div className='  mx-auto flex justify-between items-center '>
<ul className='flex gap-10 text-brown-500'>
<li>
  <NavLink to="/" className={({isActive , isPending})=>
isPending ? "panding" : isActive ? active : "" }>ALL PRODUCTS
  </NavLink>
</li>


<li>
<NavLink to="/about" className={({isActive , isPending})=>
isPending ? "panding" : isActive ? active : "" }>ABOUT SEEDRA
  </NavLink>
</li>


<li>
<NavLink to="/blog" className={({isActive , isPending})=>
isPending ? "panding" : isActive ? active : "" }>OUR BLOG
  </NavLink>
</li>


<li>
<NavLink to="/contacts" className={({isActive , isPending})=>
isPending ? "pending" : isActive ? active : "" }>CONTACTS
  </NavLink>
</li>

{/* <li>
<NavLink to="/" className={({isActive , isPending})=>
isPending ? "pending" : isActive ? active : "" }>
  </NavLink>
</li> */}
</ul>
</div>


<div className='flex gap-6 items-center justify-center'>
<div><FaInstagram className='text-2xl' /></div>
<div><BiLogoFacebookCircle className='text-2xl' /></div>
<div><button className='flex gap-2 items-center w-[250px] h-[20px] bg-grey-200'> <CiSearch className='text-2xl' />Search</button></div>
<div><CiHeart className='text-2xl text-green-800 border-'/></div>
<div >< PiShoppingCartLight className='text-2xl text-green-800
' /></div>
</div>




</div>
</nav>
  )
}

export default Navbar