import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
import logopic from "../assets/Logo-removebg.png"


const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-center items-center w-full bg-slate-900'>
        <div className='flex justify-between items-center max-w-[1460px] w-full h-[90px]  pl-4 pr-4'>
          <NavLink to="/">
            <div className='flex'>
              <img src={logopic} width={100} height={200}/>
              <img src={logo} width={170} height={200}/>
              
            </div>
          </NavLink>
          
          
          <div className='flex gap-12 text-white'>
            <NavLink to="/">
              <p className='text-slate-200 hover:text-green transition ease-in hover:animate-bounce'>Home</p>
            </NavLink>
            <p className='text-slate-200 hover:text-green transition ease-in hover:animate-bounce cursor-pointer'>About</p>
            <p className='text-slate-200 hover:text-green transition ease-in hover:animate-bounce cursor-pointer'>Contact</p>
          </div>

          <div className='flex gap-10 pr-6 text-white'>
            <button>Log IN</button>
            <NavLink to="/what_to_watch">
              <button>Register</button>
            </NavLink>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar