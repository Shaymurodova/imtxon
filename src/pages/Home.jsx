import React from 'react'
import img from '../photo/Vector (4).png'
import img1 from '../photo/image 2.png'
import Footer from '../componenta/Footer'
import { IoLeafOutline } from "react-icons/io5";
import { TfiFiles } from "react-icons/tfi";
import { PiForkKnifeFill } from "react-icons/pi";
import { GiTomato } from "react-icons/gi";
import { GiOakLeaf } from "react-icons/gi";
import { PiFlowerTulipBold } from "react-icons/pi";
import { LiaAppleAltSolid } from "react-icons/lia";
import { IoCartOutline } from "react-icons/io5";
import Card from '../componenta/Card';
import img2 from '../photo/image 1 (1).png'
import img3 from '../photo/image 1 (2).png'
import { GoClockFill } from "react-icons/go";
import img4 from '../photo/image 2 (1).png'
import img5 from '../photo/fer.png'
import img6 from '../photo/Ellipse 1.png'
import img7 from '../photo/Ellipse 5.png'
import img8 from '../photo/Ellipse 3.png'
import img9 from '../photo/Ellipse 2.png'

const Home = () => {
  return (
    <>
      <div>
        <div  className='card container border-[2px] w-[1450px] h-[455px] ml-[165px] rounded-lg bg-[#EAF1EB] mt-[20px]'>
          <h1 className='text-4xl font-semibold w-[650px] h-[108px] ml-[90px] mt-[50px]'>SEEDRA Basil Seeds for <br /> Indoor and Outdoor Planting</h1>
          <p className='ml-[90px] text-sm'>Be sure of our quality - the freshest batches of this season. Non-GMO,<br /> Heirloom - our seeds were tested and have the best germination ratings. <br />Your easy growing experience is our guarantee</p>
          <div className='flex gap-8'>
            <img src={img} alt="" className='ml-[90px] mt-[20px]' />
            <h1 className='text-3xl font-bold mt-[20px]'>$12.56</h1>
            <h3 className='line-through text-[#70737C] text-1xl font-semibold mt-[25px]'>$15.56</h3>
          </div>
          <div className='border-[1px] ml-[90px] mt-[30px]'>
            <button className='bg-[#359740] w-[153px] h-[51px] rounded text-white'>Add to card</button> <button className='text-[#359740] bg-[#FFFFFF] rounded w-[153px] h-[51px]'>Discover</button>
          </div>
         <div className='mt-[-330px] ml-[1000px]'>
           <img src={img1} alt="" />
         </div>
        </div>

         
         <div>
          <div className='card w-[1450px] h-[104px] border ml-[165px] bg-[#FFE62E17] mt-[20px] rounded-lg'>
            <h1 className='text-2xl font-bold text-center mt-[15px] '>We sell seeds </h1>
            <p className='text-center text-[#70737C]'>that always sprout and gardening supplies which never break</p>
          </div>
         </div>
         

         <div>
          <div className='ml-[165px] text-3xl font-bold mt-[50px]'>
            <h1>Our products.</h1>
            <div>
            <button className='border w-[155px] h-[55px] text-[#359740] rounded ml-[1250px] mt-[-50px] absolute  text-sm'>View all (12)</button>
            </div>
            <div className='flex gap-12 mt-[80px]'>
            <button className='flex w-[150px] text-xs h-[80px] bg-white  rounded-[10px]   gap-2 text-center border-[1px]   justify-center items-center text-black '> <IoLeafOutline className='text-2xl text-[#359740]'/> ALL </button>
            <button className='flex w-[150px] text-xs h-[80px] bg-white  rounded-[10px]   gap-2 text-center border-[1px]   justify-center items-center text-black'> < TfiFiles className='text-3xl text-[#359740]'/>BUNDLES</button>
            <button className='flex w-[150px] text-xs h-[80px] bg-white  rounded-[10px]   gap-2 text-center border-[1px]   justify-center items-center text-black'> <GiOakLeaf className='text-2xl text-[#359740]'/>HERBS</button>
            <button className='flex w-[150px] text-xs h-[80px] bg-white  rounded-[10px]   gap-2 text-center border-[1px]   justify-center items-center text-black'> <GiTomato className='text-2xl text-[#359740]' /> VEGETABLES</button>
            <button className='flex w-[150px] text-xs h-[80px] bg-white  rounded-[10px]   gap-2 text-center border-[1px]   justify-center items-center text-black'><LiaAppleAltSolid className='text-2xl text-[#359740]'/>FRUITS</button>
            <button className='flex w-[150px] h-[80px] text-xs bg-white  rounded-[10px]   gap-2 text-center border-[1px]   justify-center items-center text-black'> <PiForkKnifeFill className='text-2xl text-[#359740]'/>SUPPLIES</button>
            <button className='flex w-[150px] text-xs h-[80px] bg-white  rounded-[10px]   gap-2 text-center border-[1px]   justify-center items-center text-black'>< PiFlowerTulipBold className='text-2xl text-[#359740]'/>FLOWERS</button>
            </div>
          </div>
         </div>
            
        <div>
          <div className='flex items-center gap-12 mt-[150px]'>
            <div c> 
            <Card rasm={img1} star="⭐⭐⭐⭐⭐ (123)" 
             title= "Seedra Cilantro Seeds for Planting Indoor and Outdoor " 
             price="$12.56" icon=<IoCartOutline />/> 
            </div>
            <div> <Card rasm={img3} star="⭐⭐⭐⭐⭐ (123)" 
            title= "SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting " 
            price="$12.56" icon=<IoCartOutline />/>
            </div>
            <div>
            <Card rasm={img2} star="⭐⭐⭐⭐⭐ (123)" 
            title= "SEEDRA Spinach Seeds for Indoor and Outdoor Planting " 
            price="$12.56" icon=<IoCartOutline />/>
            </div>
          </div>

        
        
       <div className='flex items-center gap-10 pt-[50px]'>
        <div>
          <Card rasm= {img1} star="⭐⭐⭐⭐⭐ (123)" 
          title= "Seedra Cilantro Seeds for Planting Indoor and Outdoor " 
          price="$12.56" icon=<IoCartOutline /> />
        </div>
        <div>
         <Card rasm={img3} star="⭐⭐⭐⭐⭐ (123)" 
         title= "SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting " 
         price="$12.56" icon=<IoCartOutline /> />
       </div>
       <div>
         <Card rasm={img2} star="⭐⭐⭐⭐⭐ (123)" 
         title= "SEEDRA Spinach Seeds for Indoor and Outdoor Planting " 
         price="$12.56" icon=<IoCartOutline /> />
      </div>
</div>
        </div>
         


         <div>
          <div className='flex gap-10'>
            <h1 className='text-3xl font-bold ml-[90px] mt-[100px]'>Our blog.</h1>
            <div>
              <button className='mt-[100px] border w-[173px] h-[53px] rounded text-[#359740] text-xl ml-[1100px]  '>Go to our blog</button>
            </div>
          </div>
          <div  className='card'>
            <div className=' w-[930px] h-[400px] border ml-[90px] bg-[#EAF1EB] '>
             <h2 className='flex gap-2 mt-[20px] ml-[30px] text-[#70737C] text-1xl  font-semibold'> <GoClockFill />12.09.2021 </h2>
             <h1 className='text-3xl font-bold ml-[25px] mt-[10px]'>How to plant spinach correctly <br /> in winter</h1>
             <p className='font-thin  text-[#70737C] mt-[30px] ml-[25px]'>In most areas, successive sowing can be done from early <br /> spring until early winter, but more often during hotter <br />months...</p>
             <div>
             <button className='border w-[106px] h-[56px] ml-[25px] mt-[30px] rounded text-[#359740] bg-[#fff]' >Read</button>
             </div>
             <div className='ml-[635px] mt-[-219px] w-[294px] h-[300px]'>
             <img src={img4} alt="" />
             </div>
            </div>
          </div>
            
           <div>
           <div className='border w-[350px] h-[630px] ml-[1100px] mt-[-400px] bg-[#EFF2F8]'>
              <div>
              <h2 className='flex gap-2 mt-[20px] ml-[30px] text-[#70737C] text-1xl  font-semibold'> <GoClockFill />12.09.2021 </h2>
              <h1 className='text-3xl font-bold ml-[25px] mt-[10px]'>How to plant spinach correctly <br /> in winter</h1>
              <p className='font-thin  text-[#70737C] mt-[30px] ml-[25px]'>In most areas, successive sowing can be done from early <br/> spring until early winter, but more often during hotter <br />months...</p>
              </div>
               <div>
             <button className='border w-[106px] h-[56px] ml-[25px] mt-[30px] rounded text-[#359740] bg-[#fff]' >Read</button>
             </div>
             <div className='w-[250px] ml-[100px] mt-[-110px]'>
              <img src={img5} alt="" />
             </div>
            </div>

            <div className='w-[350px] h-[250px] border bg-[#EFF2F8] mt-[-190px] ml-[90px]'>
              <div>
              <h2 className='flex gap-2 mt-[20px] ml-[30px] text-[#70737C] text-sm  font-semibold'> <GoClockFill />12.09.2021 </h2>
              <h1 className='text-2xl font-semibold ml-[25px] mt-[10px]'>How to plant spinach correctlyin winter</h1>
              </div>
              <div>
             <button className='border w-[106px] h-[56px] ml-[25px] mt-[30px] rounded text-[#359740] bg-[#fff]' >Read</button>
             </div>
             <div className='w-[150px] h-[150px] ml-[200px] mt-[-52px]'>
              <img src={img6} alt="" />
             </div>
            </div>

            <div className='w-[350px] h-[250px] border bg-[#EFF2F8] mt-[-250px] ml-[600px]'>
              <div>
              <h2 className='flex gap-2 mt-[20px] ml-[30px] text-[#70737C] text-sm  font-semibold'> <GoClockFill />12.09.2021 </h2>
              <h1 className='text-2xl font-semibold ml-[25px] mt-[10px]'>How to plant spinach correctlyin winter</h1>
              </div>
              <div>
             <button className='border w-[106px] h-[56px] ml-[25px] mt-[30px] rounded text-[#359740] bg-[#fff]' >Read</button>
             </div>
             <div className='w-[150px] h-[150px] ml-[200px] mt-[-52px]'>
              <img src={img6} alt="" />
             </div>
            </div>
           </div>


           <div>
            <div>
              <h1 className='text-center mt-[50px] text-2xl font-bold'>What out clients say</h1>
            </div>
            <div className='card border  w-[440px] h-[250px] ml-[90px] mt-[50px] rounded bg-[#EFEFEF] opacity-25'>
              <h1 className=' w-[198px] h-[25px] '>Carla Samantoes-Diego</h1>
              <h3 className='w-[69px] h-[25px]'>12.09.2021</h3>
              <p className='z-10  mt-[50px]  '>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George z-10<br />Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the <br /> best germination ratings. </p>

            </div>
            <div className='border w-[440px] h-[250px] rounded mt-[-290px] ml-[600px]'>
              <div className=''>
                <img src={img7} alt="" className='w-[64px] h-[64px] ml-[20px] mt-[10px]' />
                <h1 className=' w-[198px] h-[25px] mt-[-45px] ml-[100px]'>Carla Samantoes-Diego</h1>
              <h3 className='w-[69px] h-[25px] ml-[100px]'>12.09.2021</h3>
              <p className='text-sm mt-[20px] ml-[20px]  '>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George z-10<br />Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the <br /> best germination ratings. </p>
              
              </div>
            </div>
            
            <div className='border w-[440px] h-[250px] rounded mt-[-210px] ml-[1100px] opacity-25'>
              <div >
              <img src={img7} alt="" className='w-[64px] h-[64px] ml-[20px] mt-[10px]' />
              <h1 className=' w-[198px] h-[25px] mt-[-45px] ml-[100px]'>Carla Samantoes-Diego</h1>
              <h3 className='w-[69px] h-[25px] ml-[100px]'>12.09.2021</h3>
              <p className='text-sm mt-[20px] ml-[20px]  '>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George z-10<br />Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the <br /> best germination ratings. </p>
              </div>
            </div>

            <div className='w-[35px] h-[60px]  '>
              <button className=' text-[#359740]  ml-[20px] text-[#359740] border'></button>
              <button></button>
              <button></button>
            </div>
           </div>

           <div className='card border w-[1440px] h-[658px] ml-[90px]' >
            <div>
              <h1 className='text-3xl font-bold ml-[150px] mt-[50px]'>Seedra helps to grow fast and <br /> efficiant</h1>
              <p className='ml-[150px] mt-[50px] text-xs' >SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George
               </p>
               <p className='ml-[150px] mt-[50px] text-xs'>Be sure of our quality - the freshest batches of this season. Non- <br /> GMO, Heirloom - our seeds were tested and have the best <br /> germination ratings. <br /> Your easy growing experience is our guarantee <br /> Spinach commom culinary uses: salads, soups, smoothies, lasagne,<br /> pizza, pies, risotto, and more</p>
               <p className='ml-[150px] mt-[50px] text-xs'>Proudly sourced in the USA - our garden seeds are grown,<br /> harvested, and packaged in the USA. We support local farmers and <br /> are happy to produce this American-made product</p>
            </div>
            <div  >
              <img src={img8} alt="" className='ml-[800px] mt-[-400px]' />
              <img src={img9} alt="" className='ml-[840px] mt-[-500px]' />
            </div>
           </div>
            
         </div>
      </div>
    </>
  )
}
<Footer/>
export default Home
