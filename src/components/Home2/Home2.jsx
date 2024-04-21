import React,{useEffect} from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import {AiOutlineFileText} from 'react-icons/ai'
import {BsGiftFill} from 'react-icons/bs';
import {BiSolidUserPin} from 'react-icons/bi';
import {SlSocialDribbble}from 'react-icons/sl';
import './Home2.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home2() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      delay: 300,
      disable: window.innerWidth < 800
    })
  })
  return (
    <>
   <div className='max-w-[1240px] mx-auto overflow-hidden'>
     
  <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0" data-aos="fade-right" >
      <img class="object-cover object-center rounded " alt="hero" src="images/about1.jpg" />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center " data-aos="fade-up" >
      <h1 class="title-font sm:text-4xl  text-2xl mb-4 font-medium text-[rgb(77,0,75)]">About Company Name.</h1>
      <p class="mb-2 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <ul>
        <li><AiOutlineCheck className='mb-2 text-[orange] inline'/>&nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
        <li><AiOutlineCheck className='mb-2 text-[orange] inline'/>&nbsp; Lorem ipsum dolor sit amet.</li>
        <li><AiOutlineCheck className='text-[orange] inline'/>&nbsp; Lorem ipsum dolor sit.</li><br/>
      </ul>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt magnam rerum nobis incidunt numquam cupiditate modi, repudiandae neque consectetur!</p>
    </div>
  </div>

<div class="Aboutus">
    <div class="About">

      <div class="Gift">
      <AiOutlineFileText className='animate-bounce text-4xl sm:ml-[120px]  ml-[160px] text-[rgb(77,0,75)]'/>
          <h2 class="title-font font-medium text-xl text-[rgb(77,0,75)]">Innovative</h2>
          <p class="leading-relaxed">overall in here</p>   
      </div>

     <div class="Gift">
     <BsGiftFill className='animate-bounce text-4xl sm:ml-[120px]  ml-[160px]  text-[rgb(77,0,75)]'/>
          <h2 class="title-font font-medium text-xl text-[rgb(77,0,75)]">Certificates</h2>
          <p class="leading-relaxed">overall in here</p>   
   </div>

   <div class="Gift">
   <BiSolidUserPin className='animate-bounce text-4xl sm:ml-[120px]  ml-[160px]  text-[rgb(77,0,75)]'/>
          <h2 class="title-font font-medium text-xl text-[rgb(77,0,75)]">Interface</h2>
          <p class="leading-relaxed">overall in here</p> 
 </div>
 <div class="Gift">
      <SlSocialDribbble className='animate-bounce text-4xl  sm:ml-[120px]  ml-[160px] text-[rgb(77,0,75)]'/>
          <h2 class="title-font font-medium text-xl text-[rgb(77,0,75)]">Social</h2>
          <p class="leading-relaxed">overall in here</p>  
  </div>
</div>
</div>
</div>
 </>
  )
}
