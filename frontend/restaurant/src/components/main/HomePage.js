import React from 'react'
import HeroSection from './home/HeroSection'
import Search from './Search'
import Blog from './home/Blog'
import Banner from './home/Banner'
import Testimonials from './home/Testimonials'
import Delivery from './home/Delivery'
import CTA from './home/CTA'
import TopMenu from './home/TopMenu'
import MiddleSection from './home/MiddleSection'

const HomePage = () => {
  return (
    <>
        <Search />
        <main>
          <HeroSection />
          <MiddleSection />
          <TopMenu />
          <CTA />
          <Delivery />
          {/* <Testimonials /> */}
          {/* <Banner /> */}
          <Blog />

        </main>
    </>
  )
}

export default HomePage
