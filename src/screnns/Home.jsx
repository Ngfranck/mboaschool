import React from 'react'
import Hero from '../components/Hero'
import Candidature from '../components/Candidature'
import Features from '../components/Features'
import Teachers from '../components/Teachers'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export function Home(props) {


  return (
    <div>
      <Hero/>
      <Candidature />
      <Features/>
      <Teachers />
      <Testimonials/>
      <Contact />
    </div>
  )
}
