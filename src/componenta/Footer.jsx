import React from 'react'
import img from '../photo/Frame.png'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='container border mt-[100px] w-[1300px] ml-[150px] '>
        <div  className='  ml-[100px] mt-[50px]'>
            <ul className='container flex gap-10 text-2xl mt-[-10px]  '>
                <li className='text-[#359740] '>ALL PRODUCTS</li>
                <button className='border-[1px]'></button>
                <li className='text-[#70737C]'>ABOUT SEEDRA</li>
                <button className='border-[1px]'></button>
                <li className='text-[#70737C]'>OUR BLOG</li>
                <img src={img} alt="" />
                <li className='text-[#70737C]'>Terms&Conditions</li>
                <button className='border-[1px]'></button>
                <li className='text-[#70737C]'>Privacy Policy</li>
            </ul>                                  
          </div>
          <button className='border-[1px] w-[1217px] ml-[70px] text-[#359740]'></button>
          <div className='flex gap-3 ml-[100px] mt-[10px] '>
          <AiFillInstagram className='text-3xl text-[#359740]' />
          <FaFacebook  className='text-[#359740] text-3xl'/>
          </div>
          <div>
          <h1 className='text-right mt-[-25px] text-[#70737C] text-1xl'>All rights reserved</h1>
          </div>
    </div>
  )
}

export default Footer