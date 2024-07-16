import React from 'react'

type Props = {
    text: string
}

const FeatureCard = ({text}: Props) => {
  return (
    <div className="w-[300px] py-4 px-4 border-2 border-blue-800 bg-white text-blue-800 rounded-[1rem] text-justify items-center flex h-[150px]">
        <p>{text}</p>
    </div>
  )
}

export default FeatureCard