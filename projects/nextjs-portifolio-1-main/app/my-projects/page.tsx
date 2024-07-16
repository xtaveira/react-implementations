"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'


const Page = () => {
  return (
    // <div style={{ backgroundImage: "url(/mountains.jpg" }}
    //   className="w-screen h-screen flex items-center justify-center bg-cover">
    //   <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">

    <div style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="w-screen flex items-center justify-center bg-cover
     h-screen">

      {/* desktop */}
      {/* <div className="gap-5 max-w-[90%] hidden
      md:grid md:grid-cols-2 max-h-[90%]">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div> */}

      {/* Mobile Devices */}
      <div className='flex max-w-[80%] max-h-[90%] md:w-[60%]'>
        <Swiper
          slidesPerView={1} loop={true} autoplay={{ delay: 0, disableOnInteraction: false }} speed={10000} modules={[Autoplay]} className="
          w-[1000px] " spaceBetween={10}>
          {Projects.map((project, index) => (
            <SwiperSlide
              key={index}>
              <div className="border border-white p-2 h-[400px] rounded-[1rem] flex flex-col items-center">

                <ProjectCard
                  title={project.title}
                  text={project.text}
                  image={project.src}
                  link={project.link}
                />

                <div className="text-white">
                  <p className="mb-2">{project.title}</p>
                  <p>{project.text}.</p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div >
  )
}

export default Page
