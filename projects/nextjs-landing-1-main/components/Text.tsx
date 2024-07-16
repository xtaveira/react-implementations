import React from 'react'

const Text = () => {
  return (
    <section className=" w-full py-20 px-5 gap-20 flex justify-evenly items-center
    flex-col md:flex-row md:gap-0 bg-cover bg-center maparede-bg">
      <div className="w-[80%] bg-white text-blue-800 border-2 border-blue-800 
        md:w-[40%] rounded-[1rem] px-4 py-2 flex items-center justify-center text-justify md:h-[140px] ">
        <p>
          Todos os dias milhares de brasileiros utilizam <strong>um dos melhores</strong> meios de transporte público do mundo, o metro de São Paulo. <strong>Infelizmente</strong> muitos ainda não fazem o uso dessa incrível ferramenta por falta de informação.
        </p>
      </div>
      <div className="w-[80%] bg-white text-blue-800 border-2 border-blue-800
        md:w-[40%] rounded-[1rem] px-4 py-2 flex items-center justify-center text-justify md:h-[140px] ">
        <p>
          Felizmente, por meio da nossa tecnologia, hoje temos a solução de <strong><a target='_blank' href={"https://www.metro.sp.gov.br/sua-viagem/trajeto"}>Como usar</a></strong> o Metro, que funciona de forma <strong>Fácil</strong> e <strong>Intuitiva.</strong>
        </p>
      </div>
    </section >
  )
}

export default Text