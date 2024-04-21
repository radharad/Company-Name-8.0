import React,{useEffect} from 'react'
import Typed from 'react-typed'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Home2 from '../Home2/Home2'
import Footer from '../Footer/Footer'
import Cards from '../Home3/cards'
import Services from '../Home4/Services'
import Record from '../Home5/Record'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
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
     <section className="text-white z-1 mx-auto overflow-hidden">

<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
     
    <div className='max-w-[800px] mt-[0px] w-full md:py-[100px] py-[50px] mx-auto text-center flex flex-col justify-center mb-[80px]'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold py-4 leading-[50px]' data-aos="fade-down" >
          Company Name
        </h1>
        <div className=' flex justify-center items-center sm:mt-[50px]'>
          <p className='md:text-5xl sm:text-4xl text-xl  font-bold pb-[50px] '>
            Best
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 sm:pb-[60px] pb-[65px]'
            strings={['Company In India.']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />  
      </div>
      <div className='wave'>
      </div>
      </div>

    </div>
    <div class="carousel-item">
    <div className="home img" >
       <div className='headerContainer'>
       <h1 >Company Name</h1>
        <p>Best Company In India</p> 
          </div>
      </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
 </section>
 <div className='fixed cursor-pointer  md:bottom-[40px] md:left-[20px] md:right-0 right-[39px] bottom-[90px] z-[10]'>
      <a href="https://wa.me/917875006677" target='_blank'><img src='images/whatsapp.png' width={40}/></a>
   </div>  
    <Home2/>
    <Cards/>
    <Services/>
    <Record/>
    <Footer/>
    </div>
  )
}