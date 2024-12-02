import React from 'react'
import img from '../photo/Frame.png'
import { NavLink} from 'react-router-dom'
import { PiInstagramLogoThin } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
    const active = "text-grey-500 px-4 py-2 bg-green-250 "
    const panding = "text-white px-4 py-2"
  return (
    <nav>
     <div className='container mx-auto flex justify-between items-center '>
      <div className='flex items-center gap-2 mx-[100px]'>
          <img src={img} alt="" />
      </div>

      <ul className='flex gap-5 text-1xl'>
        <li>
            <NavLink to="/" className={({ isActive, isPending }) =>
    isPending ? 'panding' : isActive ? active : ""
  }>ALL PRODUCTS</NavLink>
        </li>

        <li>
            <NavLink to="/about" className={({ isActive, isPending }) =>
    isPending ? 'panding ': isActive ? active : ""
  }>ABOUT SEEDRA</NavLink>
        </li>

        <li>
            <NavLink to="/blog" className={({ isActive, isPending }) =>
    isPending ? 'panding' : isActive ? active : ""
  }>OUR BLOG</NavLink>
        </li>

        <li>
            <NavLink to="/contacts" className={({ isActive, isPending }) =>
    isPending ? 'panding' : isActive ? active : ""
  }>CONTACTS</NavLink>
        </li>
      </ul>

      <div className='flex gap-2'> 
      <PiInstagramLogoThin className='text-[#70737C]' />
      <FaFacebook  className='text-[#70737C]'/>
      </div>
      <div className='flex gap-5 border-[1px] rounded-full text-center '>
      <FaSearch  className='text-[#70737C] text-cenet' />
      <input type="text" placeholder='Search'  />
      </div>
      <div className='flex gap-3 text-[#359740] '>
      <FaRegHeart  className='text-2xl'/>
      <MdOutlineShoppingCart  className='text-2xl'/>
      </div>
        </div>
    </nav>
  )
}

export default Navbar