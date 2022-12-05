import React from 'react'
import Champions from '../components/Champions/Champions'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import ModalMenu from '../components/ModalMenu/ModalMenu'
import Work from '../components/Work/Work'

function ThemeOne() {
  return (
    <div>
        <Header />
        <Hero />
        <Work />
        <Champions />
        <Footer />
        <ModalMenu />
    </div>
  )
}

export default ThemeOne