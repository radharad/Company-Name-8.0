import React,{useEffect} from 'react'
import './Services.css'
import {TbMoneybag} from 'react-icons/tb'
import {PiShareFill} from 'react-icons/pi'
import { BsShieldFillExclamation } from 'react-icons/bs'
import {LuClock3} from 'react-icons/lu'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Services() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      delay: 300,
      disable: window.innerWidth < 800
    })
  })
  return (
    <>
    <div className='max-w-[1240px] mx-auto auto overflow-hidden '>
  
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
    </div>
    </>
  )
}
