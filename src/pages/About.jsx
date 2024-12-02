import React from 'react'
import Navbar from '../componenta/Navbar'
import img from '../photo/image 2 (1).png'
import { GoClockFill } from "react-icons/go";   
import img1 from '../photo/fer.png'
import img2 from '../photo/Rectangle 786.png'
import img3 from '../photo/2.png'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const About = () => {
  return (
 <>
  <div> 

   <div className='card w-[1450px] h-[251px] border rounded bg-[#EAF1EB] ml-[180px] mt-[20px]'>
   <div>
    <h1 className='text-5xl font-bold mt-[60px] ml-[50px]'>How to plant spinach <br /> correctly in winter</h1>
    </div>
   <img src={img} alt="" className='mt-[-151px] w-[240px] h-[245px] ml-[1210px]' />
  </div>
  
  <div>
    <div className='card'>
    <h2 className='flex gap-2 mt-[20px] ml-[180px] text-[#70737C] text-1xl  font-semibold'> <GoClockFill />12.09.2021 </h2>
    <button className='w-[1330px] h-[2px] border ml-[300px] text-[#EFEFEF] mt-[-10px] absolute'></button>
    </div>
    <div>
        <p className='ml-[180px] mt-[30px]'>Spinach is a cool-season plant that’s one of the first crops of spring and a great fall crop as well. <br /> You’ll enjoy growing this undemanding plant and will enjoy eating it even more. Harvest spinach <br /> any time to enjoy raw in salads or cook it up in seconds for a delicious side dish that’s loaded <br /> with vitamins and minerals. If you want to grow spinach in your  garden, here’s everything you <br /> need to know. </p>
         <p className='ml-[180px] mt-[30px]'>You can also download my How Do I Grow Spinach? one-sheet and keep the free resource <br /> handy for your reference</p>
        </div>
        </div>
     
           <div className='border w-[350px] h-[630px] ml-[1100px] mt-[-180px] bg-[#EFF2F8] rounded'>
               <div>
                <h1 className='text-3xl font-bold mt-[-50px]'>Related titles</h1>
               </div>
              <div >
              <h2 className='flex gap-2 mt-[20px] ml-[30px] text-[#70737C] text-1xl  font-semibold'> <GoClockFill />12.09.2021 </h2>
              <h1 className='text-3xl font-bold ml-[25px] mt-[10px]'>How to plant spinach correctly <br /> in winter</h1>
              <p className='font-thin  text-[#70737C] mt-[30px] ml-[25px]'>In most areas, successive sowing can be done from early <br/> spring until early winter, but more often during hotter <br />months...</p>
              </div>
               <div>
             <button className='border w-[106px] h-[56px] ml-[25px] mt-[30px] rounded text-[#359740] bg-[#fff]' >Read</button>
             </div>
             <div className='w-[250px] ml-[100px] mt-[-100px]'>
              <img src={img1} alt="" />
             </div>
            </div>

            <div>
                <img src={img2} alt=""  className='w-[729px] h-[315px] ml-[165px] mt-[-400px]'/>
            </div>

            <div>
                <div>
                    <h1 className='text-3xl font-bold ml-[165px] mt-[50px]'>When, Where and How to Plant Spinach</h1>
                </div>
                <div className='ml-[165px] mt-[30px] '>
                  <p>Spinach can be either sown directly into the garden or started from seeds indoors. For the least <br /> work and the most convenience, seedlings can also be purchased from a nursery in spring.</p>
                  <p className='mt-[30px]'> To give spinach a head start, plant seeds in sterile seed-starting mix indoors about six weeks <br /> before the last expected frost date. The seeds will germinate one to two weeks later in soil that is <br /> between 60 and 68 degrees. If growing in a room that stays cool, consider using a seed-starting <br /> mat that will raise the temperature of the soil.</p>
                   <p className='mt-[30px]'>Spinach is frost tolerant, so it can go in the ground long before many other crops. When spinach <br /> seedlings have two true leaves and when there are four or fewer weeks remaining until your last <br /> frost date, the seedlings may be transplanted outdoors.</p>  
                  <p className='mt-[30px]'> Seeds can be planted outdoors as soon as the soil is workable in spring — about six weeks <br /> before the last expected frost — and they will germinate as the days warm.</p>
                   <p className='mt-[50px]'>To germinate seeds faster and more reliably, there is a process called “priming.” A week before <br /> sowing spinach seeds indoors or out, soak seeds in room temperature water overnight or up to <br /> 24 hours. Next, place the seeds on a paper towel to air dry for one or two days. Once the seeds <br /> appear dry, place them in an airtight container and store the container in a cool place. The <br /> seeds will have soaked up and retained enough water to stimulate the first stages of <br /> germination. Wait at least five days, but no more than seven, and sow the seeds. </p>
                   <p className='mt-[80px]'>Primed spinach seeds will germinate both faster and more uniformly: In about five days, the <br /> grass-like seedlings will emerge.</p> 
                </div>
            </div>

            <div className='border w-[350px] h-[630px] ml-[1100px] mt-[-680px] bg-[#35974014] rounded'>
            <div >
              <h2 className='flex gap-2 mt-[20px] ml-[30px] text-[#70737C] text-1xl  font-semibold'> <GoClockFill />12.09.2021 </h2>
              <h1 className='text-3xl font-bold ml-[25px] mt-[10px]'>How to plant spinach correctly <br /> in winter</h1>
              <p className='font-thin  text-[#70737C] mt-[30px] ml-[25px]'>In most areas, successive sowing can be done from early <br/> spring until early winter, but more often during hotter <br />months...</p>
              </div>
               <div>
             <button className='border w-[106px] h-[56px] ml-[25px] mt-[30px] rounded text-[#359740] bg-[#fff]' >Read</button>
             </div>
             <div className='w-[250px] ml-[100px] mt-[-127px]'>
              <img src={img3} alt="" />
             </div>
             
            </div>
            <div className='ml-[165px] mt-[60px] '>
                <div className='w-[1290px] h-[104px] bg-[#359740] border rounded'>
                 <h2 className='text-white text-lg ml-[30px] mt-[20px]'>Title was helpful?</h2> 
                 <h1 className='text-white text-3xl ml-[30px]'>Share with friends</h1>
                 </div>
                 <div className='flex gap-3 ml-[1110px] mt-[-60px]' >
                 <FaFacebook  className='text- w-[32px] h-[32px] bg-green text-white'/>
                 <AiFillTwitterCircle className='w-[32px] h-[32px] text-white' />
                 <FaPinterest  className='w-[32px] h-[32px] text-white' />
                 </div>
             </div>
  
  
  
  </div>
 
    
    
    
    
    
    
    
    </>
  )
}

export default About