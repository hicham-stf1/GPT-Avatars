import React from 'react'
import Header from '../components/landing-page/Header'
import Hero from '../components/landing-page/Hero'

export default function LandingPage() {
  return (
    <div>
        <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#f3ad8f_100%)]"></div>

      <Header />
      <Hero />
      {/* header

      footer
      hero
      pricing
      Our Avatars - Feature
      RoadMap  */}
    </div>
  )
}
