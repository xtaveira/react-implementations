import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <section className="w-full bg-cover bg-center hero-bg h-[800px] flex flex-col items-center
    md:h-[510px]">
      <Navbar />
      <div className="w-full h-full flex items-center justify-center">
        <div className="rounded-[1rem]  w-[70%]  text-[2.4rem]
        md:w-[50%] flex flex-col justify-center shadow-2xl p-3 ">
          <h1><strong>ATRAVESSAR SÃO PAULO EM 1 HORA?</strong></h1>
          <h2><strong>É POSSÍVEL!</strong></h2>
        </div>
      </div>
    </section>
  )
}

export default Hero