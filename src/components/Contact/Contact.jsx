import React,{useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './contact.css'
import {MdLocationPin} from 'react-icons/md'
import {MdAttachEmail} from 'react-icons/md'
import {MdAddIcCall} from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Contact() {
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
       
        <div className="bgImage overflow-hidden">
        <h1 className='bgImg font-bold'>CONTACT</h1>
        </div> 
        <div className='max-w-[1240px] mx-auto overflow-hidden'>
         
        <div className='grid md:grid-cols-[30%_50%_auto] grid-cols-1'>
         
         <div className='sm:mt-[70px] mt-[50px] mx-auto' data-aos="fade-up">
         <h6 className='grid grid-cols-[10%_90%] items-center'>
              <MdLocationPin className='bg-[#e9d1e5] rounded-[50%] text-[rgb(77,0,75)] text-[40px] p-2 relative'/>
              <p className=' text-[20px] font-bold ml-[25px]'>Location</p>
              </h6>
              <h6 className=' sm:leading-5 ml-[50px]'>A108 Adam Street, New York, NY535022</h6>
              <br/>

              <h6 className='grid grid-cols-[10%_90%] items-center'>
              <MdAttachEmail className='bg-[#e9d1e5] rounded-[50%] text-[rgb(77,0,75)] text-[40px] p-2 relative'/>
              <p className='  text-[20px] font-bold ml-[25px]'>Email</p>
              </h6>
              <h6 className=' sm:leading-3 ml-[50px]'>info@example.com</h6>
              <br/>

              
              <h6 className='grid grid-cols-[10%_90%] items-center'>
              <MdAddIcCall className='bg-[#e9d1e5] rounded-[50%] text-[rgb(77,0,75)] text-[40px] p-2 relative'/>
                <p className=' text-[20px] font-bold ml-[25px]'>Call</p>
              </h6>
              <h6 className=' sm:leading-3 ml-[50px]'>+1 234567890</h6>
              <br/>
         </div>     
         
        <div className='mx-auto' data-aos="fade-up">
         <div class="text-gray-600 body-font bg-[white] relative">
  <div class="container px-5 sm:py-24 py-12 mx-auto">
    
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <input type="text" id="name" placeholder='Your Name' name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <input type="email" id="email" placeholder='Your Email' name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <input type="email" id="email" placeholder='Subject' name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <textarea id="message" name="message" placeholder='Message' class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-[rgb(77,0,75)] hover:bg-[purple]  border-0 py-2 px-8 focus:outline-none rounded text-lg">Send Message</button>
        </div>
    </div>
    </div>
    </div>
    </div>
   </div>

   <div className='callbg sm:ml-[-10px] mt-[30px]' data-aos="fade-up"></div>
   
    </div>
        </div>
        <div className='fixed cursor-pointer  md:bottom-[40px] md:left-[20px] md:right-0 right-[39px] bottom-[90px] z-[10]'>
      <a href="https://wa.me/917875006677" target='_blank'><img src='images/whatsapp.png' width={40}/></a>
   </div> 

   <div className='mapContainer md:py-[40px] py-[20px] '>
     <div className='md:w-[1100px] mx-auto md:pb-5'>
      <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.4140072672917!2d79.07551177432455!3d21.096054385465585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf12e771c019%3A0xe5884397b38b822e!2sPROBUZ%20TECHNOLOGIES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1697096461069!5m2!1sen!2sin"width="100%" height="450" style={{border:" 0"}} allowfullscreen="" loading="lazy"></iframe>
     </div>
     </div>
   </div>
        <Footer/>
    </>
  )
}
