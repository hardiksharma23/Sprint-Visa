import React from 'react'
import logopic from '../assets/Logo-removebg.png'
import logo from "../assets/logo.png"
import { FaHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className='flex h-full bg-slate-900'>
        <div className='flex justify-center items-center'>
            <img src={logopic} alt="logo" className='pl-24 pb-10 w-[360px]' />
            <div className='flex flex-col items-center'>
                <img src={logo} alt='logo-text' width={240} className='w-full pb-5'/>
                <p className="flex gap-3 text-white font-serif text-3xl">Built for India <FaHeart color='red' /></p>
            </div>
            
        </div>
        <div className='flex flex-col text-white gap-5 pl-[250px]'>
            <p className='font-bold text-xl text-white pb-3'>Company</p>
            <p className='text-slate-300 cursor-pointer pl-1'>About Us</p>
            <p className='text-slate-300 cursor-pointer pl-1'>Jobs</p>
            <p className='text-slate-300 cursor-pointer pl-1'>For Travel Agent</p>
        </div>

        <div className='flex flex-col text-white gap-5 pl-[150px] pt-2'>
            <p className='font-bold text-xl text-white pb-3'>Support</p>
            <p className='text-slate-300 cursor-pointer pl-1'>Help Center</p>
            <p className='text-slate-300 cursor-pointer pl-1'>Contact</p>
        </div>

        <div className='flex flex-col text-white gap-8 pl-[165px] pt-5 cursor-pointer'>
            <FaFacebook size={23} />
            <LuInstagram size={23}/>
            <FaTwitter size={23}/>
            <IoLogoYoutube size={23}/>
        </div>
    </div>
  )
}

export default Footer