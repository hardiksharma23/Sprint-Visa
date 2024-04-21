import React from 'react'
import HeroImg from "../assets/HeroImg.jpg"

const Hero = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-between items-center w-[1160px] ml-[400px] mt-10'>
          <div className='flex flex-col'>
              <span className='font-extrabold text-6xl text-green'>Online E-Visa</span>
              <br/>
              <span className='font-extrabold text-6xl'>Application</span>
              <div className='mt-10 flex flex-col'>
                <label className='font-bold mt-10 ml-3'>Where am I From</label>
                <input type='text' placeholder='India' className='bg-blue-300 rounded-lg p-3 mt-3 border-2 border-black'/>
              </div>
              <div className='mt-10 flex flex-col'>
                <label className='font-bold mt-10 ml-3'>Where am I Going?</label>
                <input type='text' placeholder='India' className='bg-blue-300 rounded-lg p-3 mt-3 border-2 border-black'/>
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