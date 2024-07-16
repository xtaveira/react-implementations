import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className=" w-screen flex justify-evenly px-5 py-10 items-center">
      <div><Image
        src="/SaoPauloLogo.png"
        alt='Sao Paulo Logo'
        width={180}
        height={150}
      /></div>
      <div>
        <div className="flex gap-5 bg-white p-2 rounded-[0.8rem]">
          <a href='https://www.instagram.com/metrospoficial/' target='_blank'>
            <Image
              src="/InstagramLogo.png"
              alt='Instagram Logo'
              width={40}
              height={40}
            />
          </a>
          <a href='https://www.facebook.com/metrosp/' target='_blank'>
            <Image
              src="/FacebookLogo.png"
              alt='Facebook Logo'
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer