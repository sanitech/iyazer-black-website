import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Services from '../Components/Services'
import FeatureMovies from '../Components/Feautermovies'
import Team from '../Components/Team'
import CAt from '../Components/CAt'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>

      <Hero />
      <About />
      <Services />
      <FeatureMovies />
      {/* <Team /> */}
      <CAt />
      <Footer />

    </div>
  )
}

export default Home
