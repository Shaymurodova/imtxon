import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import img from '../photo/ApplePay.png';
import img1 from '../photo/Visa.png';
import img2 from '../photo/MasterCard.png';
import img3 from '../photo/PayPal.png';
import { FaArrowRight } from "react-icons/fa";



const Blog = () => {
  return (
    <>
   <div className='container'>
    <div className='mt-[100px] text-center'>
     <FaArrowLeft className='text-[#70737C] ml-[700px] mt-[15px] w-[18px] h-[18px] absolute' />
      <h1 className='text-3xl ml-[100px] font-bold font-sans'>Payment info</h1>
      <button className='w-[25px] h-[7px] border rounded bg-[#359740] opacity-25 ml-[200px] mt-[-15px] absolute '></button>
      <button className='w-[25px] h-[7px] border rounded bg-[#359740]  ml-[230px] mt-[-15px] absolute '></button>
    </div>

    <div>
      <h4 className='text-[#70737C] ml-[700px] mt-[50px]'>Card type</h4>
    </div>
     <div className='flex gap-5 ml-[700px] mt-[5px]'>
      <img src={img} alt="" className='border rounded' />
      <img src={img1} alt="" className='border rounded' />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
     </div>
      

      <div className='ml-[700px] mt-[20px]'>
        <h4 className='text-[#70737C]'>Card number</h4>
        <input type="text" placeholder='0000 0000 0000 0000' className='border w-[446px] h-[56px]' />
      </div>
        

        <div className='flex gap-20 ml-[700px] mt-[20px]'> 
          <h4 className='text-[#70737C]'>Expiring date</h4>
          <h4 className='text-[#70737C] ml-[250px] absolute'>CCV</h4>
        </div>
        <div>
          <input type="text" placeholder='01/01' className='border ml-[700px] w-[200px] h-[56px] absolute text-[#EFEFEF]  ' />
          <input type="text" placeholder='123' className='border ml-[950px] w-[200px] h-[56px] absolute  ' />
        </div>
        
        <div>
          <button className='border w-[447px] ml-[700px] mt-[80px]'></button>
        </div>
          
          <div className='flex ml-[700px] mt-[20px] '>
            <h1 className='text-[#70737C]'>Total amount</h1>
            <h1 className='absolute ml-[380px] font-bold text-2xl'>$12.56</h1>
          </div>

       <div className='w-[447px] h-[51px] border rounded bg-[#359740] ml-[700px] mt-[50px] text-white flex text-lg '>
          <h1 className='mt-[10px]'>$12.56</h1>
          <h1 className='mt-[10px] absolute ml-[300px]'>Continue</h1>
          <FaArrowRight  className='ml-[350px] mt-[15px] w-[18px] h-[18px]'/>
        </div>
</div>
 </>
  )
}

export default Blog