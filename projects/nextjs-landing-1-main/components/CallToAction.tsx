import React from 'react'

const CallToAction = () => {
  return (
    <section className=" py-20 flex justify-center items-center">
        <div className="flex flex-col gap-2 text-[1.7rem] items-center bg-blue-800 p-3 rounded-[0.5rem]">
            <h2 className='rounded p-2'><strong>NÃO PERCA MAIS TEMPO!</strong></h2>
            <a  className="border-2 text-[1.8rem] border-blue-800 rounded py-2 px-10 bg-white text-blue-800 shadow-2xl" href='https://www.metro.sp.gov.br/pt_BR' target='_blank'><h1><strong>QUERO CONHECER MAIS!</strong></h1></a>
        </div>
    </section>
  )
}

export default CallToAction