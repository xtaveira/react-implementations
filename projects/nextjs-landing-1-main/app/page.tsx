import CallToAction from '@/components/CallToAction'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Text from '@/components/Text'
import React from 'react'

const Home = () => {
  return (
    <main>
      {/* Capture reader's attention first */}
      <Hero />

      {/* Describe the problem your header has and how you will adress it */}
      <Text />

      <div className='custom-background bg-cover bg-center'>
        {/* Sell you points, Features + Benefits */}
        <Features />
        {/* CTA is the easy possibiliry for readers to engage */}
        <CallToAction />
      </div>


    </main>
  )
}

export default Home