import React from 'react'
import { MdWifiCalling3 } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";

const Contacts = () => {
  return (
    <>
    <div className='container'>
      <div className='card w-[1440px] h-[546px] border rounded-lg ml-[180px] mt-[50px] bg-[#EAF1EB]'>
      <h1 className='text-5xl font-bold mt-[50px] ml-[70px]'>Contact us</h1>
      <p className='ml-[70px] mt-[30px]'> Send for us your request and we <br /> will get in touch with you as <br /> soon as possible</p>
      </div>
        <div className='card w-[536px] h-[482px] bg-[#FFFFFF] border rounded-lg ml-[1050px] mt-[-510px]'>
          <div>
           <h1 className='text-[#70737C] ml-[20px] mt-[10px]'>Name</h1>
           <input type="text" placeholder='Your name' className='border w-[471px] h-[56px] ml-[20px] mt-[10px] ' />
          </div>
             
             <div>
             <h1 className='text-[#70737C] ml-[20px] mt-[10px]'>E-mail</h1>
           <input type="text" placeholder='Your email' className='border w-[471px] h-[56px] ml-[20px] mt-[10px] ' />
             </div>
          
             <div>
             <h1 className='text-[#70737C] ml-[20px] mt-[10px]'>Message</h1>
           <input type="text" placeholder='Your message' className='border w-[471px] h-[136px] ml-[20px] mt-[10px]  ' />
             </div>


             <div>
              <button className='w-[120px] h-[50px] border rounded-lg bg-[#359740] text-white ml-[20px] mt-[10px]'> Send request</button>
              <p className='text-[#70737C] mt-[-50px] ml-[160px]'>By sending request you agree to <br /> out Pivacy&Policy</p>
             </div>
              </div>

              <div className='ml-[240px] mt-[-200px] flex gap-12 absolute '>
             <MdWifiCalling3 className='bg-white w-[40px] h-[35px] rounded text-[#359740]' />
             <h1 className='text-[#70737C] font-bold text-3xl'>+380 98 782 82 23</h1>
         </div>
         <div className='ml-[240px] mt-[-100px] flex gap-12 absolute '>
         <MdMarkEmailUnread className='bg-white w-[40px] h-[35px] rounded text-[#359740]' />
             <h1 className='text-[#70737C] font-bold text-3xl'>mailmail@gmail.com</h1>
         </div>











    </div>
    
    
    
    
    
    </>
  )
}

export default Contacts