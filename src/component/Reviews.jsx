import React from 'react'
import img1 from '../assets/testimonials/testimonial-1.jpg'
import img2 from '../assets/testimonials/testimonial-2.jpg'
import img3 from '../assets/testimonials/testimonial-3.jpg'
import img4 from '../assets/testimonials/testimonial-4.jpg'


const Reviews = () => {
  return (
    <div className='flex justify-center pb-10'>
        <div className='bg-slate-400 text-white flex flex-col items-center mt-20 mb-20 w-[1760px] h-[600px] rounded-3xl'>
            <p className='text-black font-extrabold text-3xl font-serif pt-4'>Meet Fellow Indians</p>
            <p className='text-black font-extrabold text-3xl font-serif pt-4'>Who Are Visa Ready with Us</p>
            <div className='flex flex-row pt-10 gap-16'>
                <div className=''>
                    <img src={img1} alt="test-1" width={350} className='rounded-xl h-[340px]'/>
                    <p className='text-black pt-4 pl-3 font-bold text-2xl'>Saloni Srivastva</p>
                    <p className='text-black pt-1 pb-2 pl-3 font-bold text-xl'>Vietnam Visa in 2 hours</p>
                </div>
                <div>
                    <img src={img2} alt="test-1" width={350} className='rounded-xl h-[340px]'/>
                    <p className='text-black pt-4 pl-3 font-bold text-2xl'>Mohanish Singh</p>
                    <p className='text-black pt-1 pb-2 pl-3 font-bold text-xl'>Japan Visa in 5 days</p>
                </div>
                <div>
                    <img src={img3} alt="test-1" width={350} className='rounded-xl h-[340px]'/>
                    <p className='text-black pt-4 pl-3 font-bold text-2xl'>Priya Shah</p>
                    <p className='text-black pt-1 pb-2 pl-3 font-bold text-xl'>Dubai E-Visa in 24 hours</p>
                </div>
                <div>
                    <img src={img4} alt="test-1" width={350} className='rounded-xl h-[340px]'/>
                    <p className='text-black pt-4 pl-3 font-bold text-2xl'>Rahul Sharma</p>
                    <p className='text-black pt-1 pb-2 pl-3 font-bold text-xl'>Schengen Visa in 4 days</p>
                </div>
    
            </div>
        </div>
    </div>
  )
}

export default Reviews