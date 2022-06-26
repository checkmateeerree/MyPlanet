import React from 'react'
import Hero from './Hero'
import Features from './Features'

const DefaultHome = () => {
  if (typeof window === 'undefined') {
    return <></>;
  }
    return (
        <>
          <Hero />
          <Features />
        </>
      )
}

export default DefaultHome