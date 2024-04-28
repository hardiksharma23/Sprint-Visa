import React, { useState } from 'react'
import HeroImg from "../assets/HeroImg.jpg"

import { useNavigate} from "react-router-dom"

const Hero = (props) => {

  let input=props.input
  let setInput=props.setInput
  const navigate=useNavigate();

function changeHandler(event){
  setInput(event.target.value)
  console.log(input)
}

function clickHandler(){
  navigate('GetVisa')
}

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center w-[1160px] ml-[400px] mt-10'>
          <div className='flex flex-col'>
              <span className='font-extrabold text-6xl text-green'>Online E-Visa</span>
              <br/>
              <span className='font-extrabold text-6xl'>Application</span>
              <div className='mt-10 space-x-4'>
                <input 
                type='text'
                name='country'
                value={input}
                onChange={changeHandler}
                placeholder='Where are you going?'
                className='bg-slate-900 text-neutral-100 h-10 w-[250px] rounded-lg px-3  '
                />
                <button className='bg-green px-2 py-2 rounded-lg text-xl font-semibold text-neutral-100' onClick={clickHandler}>Get Visa!</button>
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