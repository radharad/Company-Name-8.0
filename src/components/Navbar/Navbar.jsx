import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {NavLink} from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
  const [toggle,setToggle] = useState(false)

  const handleToggle = () => {
   setToggle(!toggle)
  }

  return (
    <div>
     <div className='color bg-[#380934] py-[20px]  md:pt-[0px] pt-[10px]  overflow-hidden' >
         <div className=' px-4 text-white flex justify-between  items-center'>
        <div className='w-full text-3xl font-bold decoration-none'>
        <NavLink to={"/"}>
          Company Name
          </NavLink>
        </div>
        <ul className='hidden md:flex gap-10 text-white pt-4 items-center'>
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/business"}>Business</NavLink>
        </li>
        <li>
          <NavLink to={"/legal"}>Legal</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
        <li>
          <NavLink to={"/register"}>Register</NavLink>
        </li>
        </ul>
        <div onClick={handleToggle} className='block md:hidden'>
        {
          toggle ?
          <AiOutlineClose size={20}/>
          :
          <AiOutlineMenu size={20}/>
        }
        </div>

        {/* Responsive menu */}
        <ul className={toggle ? 'fixed  left-0 top-0 w-[86%] h-[380px] text-center border-r-gray-900 bg-[rgb(77,0,75)] text-white ease-in-out duration-500  z-2' : ' fixed ease-in-out duration-500 left-[-100%] z-2'}>
        <li className='p-3'>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li className='p-3'>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li className='p-3'>
          <NavLink to={"/business"}>Business</NavLink>
        </li>
        <li className='p-3'>
          <NavLink to={"/legal"}>Legal</NavLink>
        </li>
        <li className='p-3'>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li className='p-3'>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
        <li className='p-3'>
          <NavLink to={"/register"}>Register</NavLink>
        </li>
        </ul>
      </div>
     </div>
    </div>
  )
}
