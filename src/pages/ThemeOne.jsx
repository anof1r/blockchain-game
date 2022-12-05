import React from 'react'
import Champions from '../components/Champions/Champions'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Work from '../components/Work/Work'

function ThemeOne() {
  return (
    <div>
        <Header />
        <Hero />
        <Work />
        <Champions />
        <Footer />
    </div>
  )
}

export default ThemeOne