import React,{useEffect} from 'react'
import './Footer.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      delay: 300,
      disable: window.innerWidth < 800
    })
  })
  return (
    <div className='bg-[#380934] text-[white] overflow-hidden'>
<footer className="text-white body-font pt-[20px]">
  <div className="container  py-3 mx-auto">
    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4" data-aos="fade-up">
      <div className="lg:w-1/3 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 text-center">ABOUT</h2>
        <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum soluta facere accusantium minus doloremque odio sapiente quod magnam. Quas.</p>
      </div>
      <div className="lg:w-1/3  w-full px-4 py-2 ">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 md:ml-[100px]">USEFUL LINKS</h2>
        <nav className="list-none mb-10 md:ml-[100px]">
          <li>
            <a className="text-white hover:text-white-900" href="/">Home</a>
          </li>
          <li>
            <a className="text-white hover:text-white-900" href='/about'>About Us</a>
          </li>
          <li>
            <a className="text-white hover:text-white-900" href='/business'>Business</a>
          </li>
          <li>
            <a className="text-white hover:text-white-900" href='/legal'>Legal</a>
          </li>
          <li>
            <a className="text-white hover:text-white-900" href='/contact'>Contact</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/3  w-full px-4 ">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CONTACT</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-white-900">Abcd</a>
          </li>
          <li>
            <a className="text-white hover:text-white-900">Abcd</a>
          </li>
          <li>
            <a className="text-white hover:text-white-900">Phone:+91 1234567890</a>
          </li>
          <li>
            <a className="text-white hover:text-white-900">Email:info@companyname.com</a>
          </li>
        </nav>
      </div>
       
    </div>
  </div>
  <div className="border-t border-gray-200">
    <div className="container px-5 py-2 flex flex-wrap mx-auto items-center">
     
      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a className="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
  <div className="text-white bg-[black]">
    <div className="container mx-auto py-2  flex flex-wrap flex-col sm:flex-row">
      <p className=" text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" className="text-white ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
      </p>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-white text-sm">Enamel pin tousled raclette tacos irony</span>
    </div>
  </div>
</footer>
    </div>
  )
}