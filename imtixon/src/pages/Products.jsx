import React from 'react'
import { AiFillFire } from "react-icons/ai";
import { IoLeafOutline } from "react-icons/io5";
import { TfiFiles } from "react-icons/tfi";
import { GiTomato } from "react-icons/gi";
import { LiaAppleAltSolid } from "react-icons/lia";
import { PiFlowerTulipBold } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";
import { GiOakLeaf } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
import Card from '../components/Card';
import { PiShoppingCartLight } from "react-icons/pi";
import { MdAccessTimeFilled } from "react-icons/md";


const Products = () => {
  return (
  <>
  <div className='flex items-center justify-center mx-auto container w-[100vw] mt-20'>

<div className='w-[2200px] h-[630px] bg-[#EAF1EB] rounded-3xl  mx-auto relative pl-[80px]'>
 <div className='text-7xl font-bold mt-[60px] '>
  <h1>SEEDRA Basil Seeds for </h1>
  <h1>Indoor and Outdoor Planting</h1></div> 
  <p className='text-2xl w-[780px] pt-8 text-[23px] font-[400]'>Be sure of our quality - the freshest batches of this seaon. Non-GMO,
     Heirloom - our seeds were tested and have the best germination ratings.
      Your easy growing experience is our guarantee</p>
     <div className='flex items-center gap-10 pt-8'>
     <AiFillFire className='text-red-500 text-8xl' />
      <h1 className='text-7xl font-bold'>$12.56</h1>
      <h3 className='text-3xl text-gray-500 py-8'> <del>$15.56</del></h3>
      </div> 

<div className='flex items-center gap-10 pt-8'>
  <button className='bg-[#359740] text-white px-4 py-2 rounded-2xl w-[200px] h-[50px] font-semibold'>Add to Card</button>
  <button className='bg-white text-[#359740] px-4 py-2 rounded-2xl w-[200px] h-[50px] font-semibold'>Discover</button>
</div>

</div>


<div></div>


  </div>
  
  
  <div className='w-[1550px] h-[140px] bg-[#FFE62E17] rounded-3xl  mx-auto relative top-[30px] text-center pt-[30px]'>
    <h1 className='text-5xl font-[500]'>We sell seeds </h1>
    <p className='text-2xl font-[300] pt-4 text-gray-500'>that always sprout and gardening supplies which never break</p>
  </div>


  <div className='w-[100vw] mt-20 mx-auto container'>
<div className='flex  '><h1 className='text-7xl font-bold'>Our products.</h1>
<button className='bg-[white] text-[#359740] px-4 py-2 rounded-[10px] w-[200px] 
h-[50px] font-semibold border-[1px] mt-[20px] ml-[800px]'>
  View all (12)</button>
</div>





<div className='flex items-center gap-10 pt-[50px]'>
  <button className='w-[120px] h-[80px] bg-white text-black rounded-[10px] border-[1px] flex items-center gap-2 text-center justify-center'>
  <IoLeafOutline className='text-2xl text-[#359740]'/> ALL </button>
  <button className='w-[150px] h-[80px] bg-white text-black rounded-[10px] border-[1px] flex items-center gap-2 text-center justify-center'>
    <TfiFiles className='text-2xl text-[#359740] ' /> BUNDLES</button>
  <button className='w-[140px] h-[80px] bg-white text-black rounded-[10px] border-[1px] flex items-center gap-2 text-center justify-center'>
    <GiOakLeaf className='text-2xl text-[#359740]'/> HERBS</button>
  <button className='w-[180px] h-[80px] bg-white text-black rounded-[10px] border-[1px] flex items-center gap-2 text-center justify-center'>
    <GiTomato className='text-2xl text-[#359740]' /> VEGETABLES</button>
  <button className='w-[160px] h-[80px] bg-white text-black rounded-[10px] border-[1px] flex items-center gap-2 text-center justify-center'>
    <LiaAppleAltSolid className='text-2xl text-[#359740]'/> FRUITS</button>
  <button className='w-[160px] h-[80px] bg-white text-black rounded-[10px] border-[1px] flex items-center gap-2 text-center justify-center'>
    <PiForkKnifeFill className='text-2xl text-[#359740]' /> SUPPLIES</button>
  <button className='w-[160px] h-[80px] bg-white text-black rounded-[10px] border-[1px] flex items-center gap-2 text-center justify-center'>
    <PiFlowerTulipBold className='text-2xl text-[#359740]' /> FLOWERS</button>
</div>


<div>

<div className='flex items-center gap-10 pt-[50px]'>
  <div> <Card rasm="img" star="⭐⭐⭐⭐⭐ (123)" 
  title= "Seedra Cilantro Seeds for Planting Indoor and Outdoor " 
  price="$12.56" icon=<PiShoppingCartLight />/></div>
  <div> <Card rasm="img1" star="⭐⭐⭐⭐⭐ (123)" 
  title= "SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting " 
  price="$12.56" icon=<PiShoppingCartLight />/></div>
    <div><Card  star="⭐⭐⭐⭐⭐ (123)" 
  title= "SEEDRA Spinach Seeds for Indoor and Outdoor Planting " 
  price="$12.56" icon=<PiShoppingCartLight />/></div>
  </div>

<div className='flex items-center gap-10 pt-[50px]'>
<div><Card rasm="img" star="⭐⭐⭐⭐⭐ (123)" 
  title= "Seedra Cilantro Seeds for Planting Indoor and Outdoor " 
  price="$12.56" icon=<PiShoppingCartLight />/></div>
<div><Card  star="⭐⭐⭐⭐⭐ (123)" 
  title= "SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting " 
  price="$12.56" icon=<PiShoppingCartLight />/></div>
<div><Card  star="⭐⭐⭐⭐⭐ (123)" 
  title= "SEEDRA Spinach Seeds for Indoor and Outdoor Planting " 
  price="$12.56" icon=<PiShoppingCartLight />/></div>

</div>


</div>


<div className='flex w-[100vw] mt-20 mx-auto container '><h1 className='text-7xl font-bold'>Our blog.</h1>
<button className='bg-[white] text-[#359740] px-4 py-2 rounded-[10px] w-[200px] 
h-[50px] font-semibold border-[1px] mt-[20px] ml-[800px]'>
Go to our blog</button>
</div>

<div>

<div className=' items-center gap-10 pt-[30px]'>
  <div className='w-[850px] h-[450px] bg-[#EAF1EB] rounded-[10px] pl-[50px]'>
<p className='flex items-center gap-2 pt-[50px]  text-[gray] pl-4'> <MdAccessTimeFilled />12.09.2021</p>
<h1 className='pt-4 pl-4 font-bold text-5xl w-[65%]'>How to plant spinach correctly in winter</h1>
<p className='pt-4 pl-4 w-[65%] text-2xl text-[gray]'>In most areas, successive sowing can be done 
  from early spring until early winter, but more 
  often during hotter months...</p>
<button className='w-[120px] h-[80px] bg-white text-[#359740] rounded-[10px] border-[1px] 
flex items-center gap-2 text-center justify-center text-2xl mt-[20px]'>Read</button>


  </div>



  <div className='flex items-center gap-10 pt-[50px]'>
    <div className='w-[400px] h-[400px] bg-[#EFF2F8] rounded-[10px] pl-[50px]'>
    <p className='flex items-center gap-2 pt-[50px]  text-[gray] pl-4'> <MdAccessTimeFilled />12.09.2021</p>
    <h1 className='pt-4 pl-4 font-bold text-3xl'>How to plant spinach correctly in winter</h1>
    <button className='w-[120px] h-[80px] bg-white text-[#359740] rounded-[10px] border-[1px]
     flex items-center gap-2 text-center justify-center text-2xl mt-[20px]'>Read</button>
    </div>

   
   
    <div className='w-[400px] h-[400px] bg-[#EFF2F8] rounded-[10px] pl-[50px]'>
    <p className='flex items-center gap-2 pt-[50px]  text-[gray] pl-4'> <MdAccessTimeFilled />12.09.2021</p>
    <h1 className='pt-4 pl-4 font-bold text-3xl'>How to plant spinach correctly in winter</h1>
    <button className='w-[120px] h-[80px] bg-white text-[#359740] rounded-[10px] border-[1px]
     flex items-center gap-2 text-center justify-center text-2xl mt-[20px]'>Read</button>
 

    </div>
  </div>


</div>




<div className='w-[400px] h-[700px] bg-[#EFF2F8]'>
<p className='flex items-center gap-2 pt-[50px]  text-[gray] pl-4'> <MdAccessTimeFilled />12.09.2021</p>
<h1 className='pt-4 pl-4 font-bold text-5xl w-[65%]'>How to plant spinach correctly in winter</h1>
<p className='pt-4 pl-4  text-2xl text-[gray]'>In most areas, successive sowing can be done 
  from early spring until early winter, but more 
  often during hotter months...</p>
<button className='w-[120px] h-[80px] bg-white text-[#359740] rounded-[10px] border-[1px]
 flex items-center gap-2 text-center justify-center text-2xl mt-[20px]'>Read</button>
</div>


</div>



<div>
<div className='flex items-center gap-2 justify-center pt-[50px]'>
  <button className='w-[40px] h-[5px] bg-[#359740]'></button>
  <button className='w-[40px] h-[5px] bg-green-100'></button>
  <button className='w-[40px] h-[5px] bg-green-100'></button>
</div>

<div>
  <h1>Seedra helps to grow fast and efficiant</h1>
  <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>
  <p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have
     the best germination ratings. </p>
  <p>  Your easy growing experience is our guarantee
  Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more
  </p>
  <p>  Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers 
    and are happy to produce this American-made product</p>
</div>


</div>







</div>





  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </>
  )
}

export default ProductsB