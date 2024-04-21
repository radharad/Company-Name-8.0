import React,{useEffect} from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Register() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      delay: 300,
      disable: window.innerWidth < 800
    })
  })
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      
  <div class="container px-5 py-24 mx-auto bg-[white]" data-aos="fade-up">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-[rgb(77,0,75)] text-center">Register</h1> <p>Lorem dolor sit amet consectetur adipisicing elit. Perferendis, fugit!"</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-full">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
            <input type="password" id="name" name="password" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
       
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-[rgb(77,0,75)] border-0 py-2 px-8 focus:outline-none rounded hover:bg-[purple] text-lg">Register</button>
        </div>
       </div>
       </div> 
       </div>
       <div className='fixed cursor-pointer  md:bottom-[40px] md:left-[20px] md:right-0 right-[39px] bottom-[90px] z-[10]'>
      <a href="https://wa.me/917875006677" target='_blank'><img src='images/whatsapp.png' width={40}/></a>
   </div> 
<Footer/>
    </div>
  )
}
