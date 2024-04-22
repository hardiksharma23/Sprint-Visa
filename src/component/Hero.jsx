import React, { useState } from 'react'
import HeroImg from "../assets/HeroImg.jpg"
import Inputs from './Inputs'

const Hero = () => {


  return (
    <div className='w-full'>
      <div className='flex justify-between items-center w-[1160px] ml-[400px] mt-10'>
          <div className='flex flex-col'>
              <span className='font-extrabold text-6xl text-green'>Online E-Visa</span>
              <br/>
              <span className='font-extrabold text-6xl'>Application</span>
              <div>
                {/* <Inputs/> */}
              </div>
          </div>
          <div>
              <img src={HeroImg} width={600}/>
          </div>
          
      </div>
    </div>

  )
}

export default Hero