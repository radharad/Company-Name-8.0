import React,{useEffect} from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './About.css'
import {TbMoneybag} from 'react-icons/tb'
import {PiShareFill} from 'react-icons/pi'
import { BsShieldFillExclamation } from 'react-icons/bs'
import {LuClock3} from 'react-icons/lu'
import {RiEmotionHappyLine} from 'react-icons/ri'
import {BsFolderFill} from 'react-icons/bs'
import {MdOutlineSupportAgent} from 'react-icons/md'
import {IoIosPeople} from 'react-icons/io'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function About() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      delay: 300,
      disable: window.innerWidth < 800
    })
  })
  return (
    <>
    <Navbar/>
   <div className="bgAbout z-[-2] overflow-hidden">
    <h1 className='about font-bold'>ABOUT</h1>
   </div>   
   <div className='max-w-[1240px] mx-auto overflow-hidden'>
  <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0" data-aos="fade-right" >
      <img class="object-cover object-center rounded " alt="hero" src="images/about1.jpg" />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center " data-aos="fade-up" >
      <h1 class="title-font sm:text-4xl text-3xl  mb-4 font-medium text-[rgb(77,0,75)]">About Company Name.</h1>
      <p class="mb-2 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <ul>
        <li><AiOutlineCheck className='mb-2 text-[orange] inline'/>&nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
        <li><AiOutlineCheck className='mb-2 text-[orange] inline'/>&nbsp; Lorem ipsum dolor sit amet.</li>
        <li><AiOutlineCheck className='text-[orange] inline'/>&nbsp; Lorem ipsum dolor sit.</li><br/>
      </ul>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt magnam rerum nobis incidunt numquam cupiditate modi, repudiandae neque consectetur!</p>
    </div>
  </div>
  </div>

  <div className='md:flex'>
<div className='box' data-aos="fade-up" data-aos-delay="300">
<TbMoneybag className='bg-[orange] rounded-[50%] text-white text-[50px] p-2'/>
   <h3>Fast Transaction</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, vel. Veritatis ab ullam in ea?</p> 
</div>

<div className='box' data-aos="fade-up" data-aos-delay="400">
<PiShareFill className='bg-[orange] rounded-[50%] text-white text-[50px] p-2'/>
   <h3>Share and Promote</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, vel. Veritatis ab ullam in ea?</p> 
</div>

<div className='box' data-aos="fade-up" data-aos-delay="500">
<BsShieldFillExclamation className='bg-[orange] rounded-[50%] text-[50px] p-2 text-white'/>
   <h3>Secure and Stable</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, vel. Veritatis ab ullam in ea?</p> 
</div>

<div className='box' data-aos="fade-up" data-aos-delay="600">
<LuClock3 className='bg-[orange] rounded-[50%] text-white text-[50px] p-2'/>
   <h3>24/7 Trading</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, vel. Veritatis ab ullam in ea?</p> 
</div>
</div>

<div class="Recording mt-[80px]"  data-aos="fade-up">
    <div class="Recorder">

      <div class="Record">
      <RiEmotionHappyLine className='bg-[orange] rounded-[50%] text-white text-[50px] p-2 relative bottom-[50px] sm:ml-[110px] ml-[150px] '/>
          <h2 class="title-font font-medium text-3xl text-gray-900 mt-[-25px]">2.7K</h2>
          <p class="leading-relaxed">Downloads</p>
       </div>

      <div class="Record">
      <BsFolderFill className='bg-[orange] rounded-[50%] text-white text-[50px] p-2 relative bottom-[50px]  sm:ml-[110px] ml-[150px] '/>
          <h2 class="title-font font-medium text-3xl text-gray-900 mt-[-25px]">2.7K</h2>
          <p class="leading-relaxed">Downloads</p> 
     </div>

     <div class="Record">
     <MdOutlineSupportAgent className='bg-[orange] rounded-[50%] text-white text-[50px] p-2 relative bottom-[50px]  sm:ml-[110px] ml-[150px] '/>
          <h2 class="title-font font-medium text-3xl text-gray-900 mt-[-25px]">2.7K</h2>
          <p class="leading-relaxed">Downloads</p>
     </div>

    <div class="Record">
   <IoIosPeople className='bg-[orange] rounded-[50%] text-white text-[50px] p-2 relative bottom-[50px]  sm:ml-[110px] ml-[150px] '/>
          <h2 class="title-font font-medium text-3xl text-gray-900 mt-[-25px]">2.7K</h2>
          <p class="leading-relaxed">Downloads</p>
  </div>

</div>
</div>

<div className='fixed cursor-pointer  md:bottom-[40px] md:left-[20px] md:right-0 right-[39px] bottom-[90px] z-[10]'>
      <a href="https://wa.me/917875006677" target='_blank'><img src='images/whatsapp.png' width={40}/></a>
   </div>  
  <Footer/>
  </>
  )
}
