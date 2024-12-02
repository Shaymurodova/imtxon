import React from 'react'


const Card = ({rasm, star, title, price, icon}) => {
  return (
   <div className='container ml-[90px] w-[400px] h-[680px] bg-white flex flex-col justify-center  gap-5  border-2 border-[#EAF1EB] rounded-[10px]'>
<div className='mt-[-320px]  ml-[70px] absolute w-[294px] h-[294px]' >
<img src={rasm} alt=""  />

    </div>

<div className='mt-[400px]'>
<h6 className='text-2xl mt-4 ml-[10px]'>{star }</h6>
<h1 className='text-2xl font-[600] mt-[-54]px ml-[10px] text-xl'>{title}</h1>
<div className='flex items-center justify-between pt-4 ml-[10px]'><p className='text-4xl text-[500] font-bold'>{price}</p>
 <div className='text-4xl text-[500] font-bold w-[70px] h-[70px] bg-[white] rounded text-[#359740] border-[1px] mr-[50px] flex items-center justify-center'>
    {icon}</div>
    </div>
</div>



   </div>
  )
}

export default Card