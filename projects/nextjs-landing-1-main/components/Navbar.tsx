import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=" w-screen flex justify-between p-5 items-center">
      <div className="border-2 border-white rounded flex items-center">
        <Image
          src="/MetroLogo.png"
          alt='Metro Logo'
          width={120}
          height={28}
        />
      </div>

      {/* Mobile Devices */}
      <div className="md:hidden border-2 border-white rounded p-1 bg-blue-800">
        <Image
          src="/MenuNavbar.png"
          alt='Menu Logo'
          width={28}
          height={28}
        />
      </div>

      {/* Desktop Devices */}
      <div className="hidden md:flex justify-end gap-10">
        <a target='_blank' href={"https://www.metro.sp.gov.br/sua-viagem/trajeto"} className="border-2 border-white px-7 py-1 rounded items-center flex bg-blue-800">Como usar?</a>
        <a target='_blank' href={"https://www.metro.sp.gov.br/wp-content/uploads/2023/12/mapaderede.pdf"} className="border-2 border-white rounded px-7 py-1 bg-blue-800">Mapa de Rede</a>
      </div>


    </nav>
  )
}

export default Navbar