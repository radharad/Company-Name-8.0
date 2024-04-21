import React, { useEffect, useState } from "react";
import './Testimonial.css'

import Footer from '../Footer/Footer'

export default function Testimonial() {
 
 
  return (
    <>
    <div className='bgtestimonal '>
    <section class="text-[#c0bebe] body-font ">
  <div class="container px-5 md:py-24 py-12 mx-auto">
    <div class="lg:w-4/5 mx-auto  grid grid-cols-[40%_auto]">
      
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="images/test.png"/>
      
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <button className='bg-[#E9E1E42E] text-[#8CC43F] p-1'>TESTIMONIAL</button>
        <h1 className='text-white md:py-[20px] md:text-xl text-2xl'>What Our Customer Say!</h1>




      </div>    
  </div>
</div>

</section>

    </div>
    <Footer/>
    </>
  )
      
    }
