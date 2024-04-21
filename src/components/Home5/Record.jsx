import React,{useEffect} from 'react'
import {RiEmotionHappyLine} from 'react-icons/ri'
import {BsFolderFill} from 'react-icons/bs'
import {MdOutlineSupportAgent} from 'react-icons/md'
import {IoIosPeople} from 'react-icons/io'
import {MdLocationPin} from 'react-icons/md'
import {MdAttachEmail} from 'react-icons/md'
import {MdAddIcCall} from 'react-icons/md'
import './Record.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Record() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      delay: 300,
      disable: window.innerWidth < 800
    })
  })
  return (
    <>
    <div className=' max-w-[1240px] mx-auto overflow:hidden'>
  <div class="Recording mt-[80px]">
    <div class="Recorder" data-aos="fade-up">

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
</div>

  <div className='max-w-[1240px] mx-auto'>
    <div className='pl-[25px] '>
   
    <h1 className='text-[rgb(77,0,75)] font-bold md:text-2xl text-xl mt-[20px]'>BUSINESS PLAN</h1>
    </div>
        <div className=' max-w-[1240px] mx-auto grid sm:grid-cols-2 grid-cols-1 items-center'>
        
         <div className='p-[30px]' data-aos="fade-right">
            <table className='w-full text-white bg-white'>
             <thead className='bg-gray-50 border-b-2 border-gray-200'> 
              <tr className='bg-[rgb(77,0,75)]'>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Joining Amount</th>
                <th>Gpv</th>
                <th>Income</th>
              </tr>
             </thead>
             <tbody>
                <tr className='bg-white'>
                    <td className='p-3 text-sm text-gray-700'>3000</td>
                    <td className='p-3 text-sm text-gray-700'>20</td>
                    <td className='p-3 text-sm text-gray-700'>2000</td>
                </tr>
                <tr className='bg-gray-50'>
                    <td className='p-3 text-sm text-gray-700'>3000</td>
                    <td className='p-3 text-sm text-gray-700'>20</td>
                    <td className='p-3 text-sm text-gray-700'>2000</td>
                </tr>
                <tr className='bg-white'>
                    <td className='p-3 text-sm text-gray-700'>3000</td>
                    <td className='p-3 text-sm text-gray-700'>20</td>
                    <td className='p-3 text-sm text-gray-700'>2000</td>
                </tr>
                <tr className='bg-gray-50'>
                    <td className='p-3 text-sm text-gray-700'>3000</td>
                    <td className='p-3 text-sm text-gray-700'>20</td>
                    <td className='p-3 text-sm text-gray-700'>2000</td>
                </tr>
                <tr className='bg-white'>
                    <td className='p-3 text-sm text-gray-700'>3000</td>
                    <td className='p-3 text-sm text-gray-700'>20</td>
                    <td className='p-3 text-sm text-gray-700'>2000</td>
                </tr>
                <tr className='bg-gray-50'>
                    <td className='p-3 text-sm text-gray-700'>3000</td>
                    <td className='p-3 text-sm text-gray-700'>20</td>
                    <td className='p-3 text-sm text-gray-700'>2000</td>
                </tr>
                <tr className='bg-white'>
                    <td className='p-3 text-sm text-gray-700'>3000</td>
                    <td className='p-3 text-sm text-gray-700'>20</td>
                    <td className='p-3 text-sm text-gray-700'>2000</td>
                </tr>
                <tr className='bg-gray-50'>
                    <td className='p-3 text-sm text-gray-700'>3000</td>
                    <td className='p-3 text-sm text-gray-700'>20</td>
                    <td className='p-3 text-sm text-gray-700'>2000</td>
                </tr>
             </tbody>
            </table>
         </div>
         <div className='p-[30px]' data-aos="fade-left">
            <img src='images/table-img.jpg'/>
         </div>
  </div>
    </div>

    <div className=''>

        <div className='income' data-aos="fade-up">
        <h3 style={{padding:"20px",color:"rgb(77,0,75)"}} className='font-bold'>TYPES OF INCOME</h3>
        <p style={{margin:"10px"}}>
        you can contact me any way that is convenient for you. i am available 24/7 via fax or email. you can also use a quick<br/> contact form below or visit my office personally, i will be happy to answer your questions. you can contact<br/> me any way that is convenient for you. i am available 24/7 via fax or email. you can also use a quick<br/> contact form below or visit my office personally, i will be happy to answer your questions.</p>
        <div className='blocks' style={{padding:"20px"}}>
          <div className='content'></div>
          </div>
          </div>

          <div class="training-section">
    <div class="container">

      <div class="training-items hover:bg-[#f0eef0] duration-300"  data-aos="zoom-in">
         <img src="images/hand-money.jpg"/>
         <h3>Direct Referal Income</h3>
         <p> dolore facere officiis a? Culpa quas dolorum fugit sapiente nam maiores, quo odit doloremque aut aliquid veritatis laborum pariatur neque fugiat quae!</p>
        
      </div>

      <div class="training-items hover:bg-[#f0eef0] duration-300" data-aos="zoom-in">
        <img src="images/coins.jpg"/>
        <h3>Level Income</h3>
        <p> dolore facere officiis a? Culpa quas dolorum fugit sapiente nam maiores, quo odit doloremque aut aliquid veritatis laborum pariatur neque fugiat quae!</p>

     </div>

     <div class="training-items hover:bg-[#f0eef0] duration-300" data-aos="zoom-in">
      <img src="images/money-bag.jpg"/>
      <h3>Club Incomet</h3>
      <p> dolore facere officiis a? Culpa quas dolorum fugit sapiente nam maiores, quo odit doloremque aut aliquid veritatis laborum pariatur neque fugiat quae!</p>

   </div>

   <div class="training-items hover:bg-[#f0eef0] duration-300" data-aos="zoom-in">
    <img src="images/group-team.jpg"/>
    <h3>Auto Pool Income</h3>
    <p> dolore facere officiis a? Culpa quas dolorum fugit sapiente nam maiores, quo odit doloremque aut aliquid veritatis laborum pariatur neque fugiat quae!</p>
 </div>

    </div>
  </div>
</div>


<div className='max-w-[1240px] mx-auto overflow-hidden'>

        <div className='grid md:grid-cols-[30%_50%_auto] grid-cols-1'>

         <div className='sm:mt-[70px] mx-auto' data-aos="fade-up">
         <h6 className='grid grid-cols-[10%_90%] items-center'>
              <MdLocationPin className='bg-[#e9d1e5] rounded-[50%] text-[rgb(77,0,75)] text-[40px] p-2 relative'/>
              <p className=' text-[20px] font-bold ml-[25px] mt-2'>Location</p>
              </h6>
              <h6 className=' sm:leading-5 ml-[50px]'>A108 Adam Street, New York, NY535022</h6>
              <br/>

              <h6 className='grid grid-cols-[10%_90%] items-center'>
              <MdAttachEmail className='bg-[#e9d1e5] rounded-[50%] text-[rgb(77,0,75)] text-[40px] p-2 relative'/>
              <p className='  text-[20px] font-bold ml-[25px] mt-2'>Email</p>
              </h6>
              <h6 className=' sm:leading-3 ml-[50px]'>info@example.com</h6>
              <br/>

              
              <h6 className='grid grid-cols-[10%_90%] items-center'>
              <MdAddIcCall className='bg-[#e9d1e5] rounded-[50%] text-[rgb(77,0,75)] text-[40px] p-2 relative'/>
                <p className=' text-[20px] font-bold ml-[25px] mt-2'>Call</p>
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
    </>
  )
}
