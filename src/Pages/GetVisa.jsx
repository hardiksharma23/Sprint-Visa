import React from 'react'
import { IoMdPhotos } from "react-icons/io";
import { FaPassport } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import getvisa from "../assets/getvisa.png"

const GetVisa = (props) => {
  let input=props.input
  let setInput=props.setInput
  return (
    <div className='flex justify-center items-center gap-52 w-full max-w-[1460px] mt-12 ml-52 mb-12 p-10 bg-blue-100 rounded-2xl '>
      <div className='flex flex-col'>
        <div className='flex font-extrabold gap-3 text-5xl font-serif'>
          <p className='text-blue-500 uppercase'>{input}</p><span>Visa for Indians</span>
        </div>
        <div className='flex flex-col pt-9 pb-3'>
          <p className='font-bold text-3xl'>Apply now for guaranteed visa on</p>
          <p className='font-bold text-2xl text-blue-500 pt-3'>13 May 2024 at 11:59 PM</p>
        </div>
        <div className='flex flex-col pt-9 pb-3'>
          <p className='font-bold text-2xl'>Documents Required :</p>
          <div className='flex pt-4 text-2xl gap-20'>
            <p className='flex relative'>Photo <IoMdPhotos className='absolute left-16 top-1'/></p>
            <p className='flex gap-5 relative'>Passport <FaPassport className='absolute left-24 top-1'/></p>
            <p className='flex gap-5 relative'>Bank Statement <RiBankFill className='absolute -right-8 top-1'/></p>
          </div>
        </div>
        <div className='flex pt-9 pb-3 gap-2'>
          <p className='font-bold text-2xl'>Amount :</p>
          <p className='flex font-bold text-2xl text-green'><FaIndianRupeeSign className='font-bold text-2xl mt-1 text-green'/>3,460</p>
        </div>

        <button className='flex w-[410px] bg-green text-3xl font-serif pt-4 pb-4 pl-5 mt-24 rounded-3xl'>Start Your Application <MdFlight className='ml-4 mt-1'/></button>

      </div>
      <div className=''>
        <img src={getvisa} alt="getimage" width={450} />
      </div>
    </div>
    
    
  )
}

export default GetVisa