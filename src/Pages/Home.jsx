import React from 'react'
import Hero from '../component/Hero'
import Card from '../component/Card'
import Reviews from '../component/Reviews'
import Footer from '../component/Footer'




const Home = (props) => {
  let input=props.input
  let setInput=props.setInput
  return (
    <div className='flex flex-col'>
      <div>
        <Hero input={input} setInput={setInput}/>
      </div>
      <div>
        <Card/>
      </div>
      <div><Reviews/></div>
      

    </div>
    
  )
}

export default Home