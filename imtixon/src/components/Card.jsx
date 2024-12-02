import React from 'react'


const Card = ({rasm, star, title, price, icon}) => {
  return (
   <div className='container pl-[40px] w-[450px] h-[700px] bg-white flex flex-col justify-center  gap-5] border-2 border-[#EAF1EB] rounded-[10px]'>
<div>
<img src={rasm} alt="" />

    </div>

<div className='pt-[400px]'>
<h6 className='text-2xl pt-4'>{star }</h6>
<h1 className='text-2xl font-[600] pt-4'>{title}</h1>
<div className='flex items-center justify-between pt-4 '><p className='text-4xl text-[500] font-bold'>{price}</p>
 <div className='text-4xl text-[500] font-bold w-[70px] h-[70px] bg-[white] rounded text-[#359740] border-[1px] mr-[50px] flex items-center justify-center'>
    {icon}</div></div>
</div>



   </div>
  )
}

export default Card