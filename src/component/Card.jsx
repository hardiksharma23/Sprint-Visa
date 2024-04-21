import React from 'react'
import { data } from '../data'

const Card = () => {
  return (
    <div className='grid grid-cols-4 mt-3 gap-16 p-4 rounded-xl'>
        {data.map(
          (data) => (
            <div key={data.id} className='rounded-xl flex flex-col justify-center  shadow-xl shadow-green hover:scale-105 transition ease-in transform origin-bottom'>
                <div>
                    <img src={data.image} className='rounded-xl'/>
                </div>
                <div className='flex pl-3 pt-3'>
                    <p className='font-bold text-4xl'>{data.name}</p>
                </div>
                <div className='flex pl-3 pt-3'>
                    <span className='font-bold pr-2'>Get On</span><p className='font-bold text-blue-500'>{data.details}</p>
                </div>
                <div className='flex pl-3 pt-3 pb-7'>
                    <p className='font-bold text-green'>{data.price}</p>
                </div>
                
                
            </div>
            
            
          )
        )}
    </div>
  )
}

export default Card