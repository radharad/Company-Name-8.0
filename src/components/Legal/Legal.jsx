import React,{useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Legal.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Legal() {
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
    <div className='max-w-[1240px] bg-color mx-auto auto overflow-hidden' >
    <h1 className='text-[rgb(77,0,75)] font-bold md:text-2xl text-xl md:mb-[50px] mb-[30px] mt-[20px] text-center pt-[20px]'>LEGAL DOCUMENTS</h1>

  
    <div className='md:py-12'>

      <div class="gallery-wrapper">
     
        <div class="image-wrapper" data-aos="fade-up" data-aos-delay="300">
          <a href="#lightbox-image-1">
            <img src="images/certificate.jpg" alt="" />
          </a>
        </div>
        <div class="image-wrapper" data-aos="fade-up" data-aos-delay="400">
          <a href="#lightbox-image-2">
            <img src="images/certificate.jpg" alt="" />
          </a>
        </div>
        <div class="image-wrapper" data-aos="fade-up" data-aos-delay="500">
          <a href="#lightbox-image-3">
            <img src="images/certificate.jpg" alt="" />
          </a>
        </div>
      </div>

      <div class="gallery-lightboxes">
        
        <div class="image-lightbox" id="lightbox-image-1">
          <div class="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-3" class="arrow-left"></a>
            <a href="#lightbox-image-2" class="arrow-right"></a>
            <img src="images/certificate.jpg" alt="" />
          </div>
        </div>
        
        <div class="image-lightbox" id="lightbox-image-2">
          <div class="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-1" class="arrow-left"></a>
            <a href="#lightbox-image-3" class="arrow-right"></a>
            <img src="images/certificate.jpg" alt="" />
          </div>
        </div>
        
        <div class="image-lightbox" id="lightbox-image-3">
          <div class="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-2" class="arrow-left"></a>
            <a href="#lightbox-image-1" class="arrow-right"></a>
            <img src="images/certificate.jpg" alt="" />
          </div>
        </div>
        
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