import React,{useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Business.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Business() {
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
    <div className="bgBusiness overflow-hidden">
        <h1 className='Business font-bold'>BUSINESS</h1>
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

      <div class="training-items hover:bg-[#f0eef0] duration-300"  data-aos="zoom-in">
        <img src="images/coins.jpg"/>
        <h3>Level Income</h3>
        <p> dolore facere officiis a? Culpa quas dolorum fugit sapiente nam maiores, quo odit doloremque aut aliquid veritatis laborum pariatur neque fugiat quae!</p>

     </div>

     <div class="training-items hover:bg-[#f0eef0] duration-300"  data-aos="zoom-in">
      <img src="images/money-bag.jpg"/>
      <h3>Club Incomet</h3>
      <p> dolore facere officiis a? Culpa quas dolorum fugit sapiente nam maiores, quo odit doloremque aut aliquid veritatis laborum pariatur neque fugiat quae!</p>

   </div>

   <div class="training-items hover:bg-[#f0eef0] duration-300"  data-aos="zoom-in">
    <img src="images/group-team.jpg"/>
    <h3>Auto Pool Income</h3>
    <p> dolore facere officiis a? Culpa quas dolorum fugit sapiente nam maiores, quo odit doloremque aut aliquid veritatis laborum pariatur neque fugiat quae!</p>
 </div>

    </div>
  </div>

<div className='blurry max-w-[1240px] mx-auto'  data-aos="fade-up">
    <div className='boxes'>
      <h3 style={{color:"rgb(77,0,75)"}} className='p-3'>The Best Business Information</h3>
      <p className='p-3'>We're In The Business Of Helping You Start Your Business.</p>
      <button>More</button>
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
