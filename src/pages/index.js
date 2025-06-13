import AboutWrap from '@/components/layout/AboutWrap/AboutWrap'
import Header from '@/components/layout/Header/Header'
import Hero from '@/components/layout/Hero/Hero'
import HeroBanner from '@/components/layout/HeroBanner/HeroBanner'
import ProductsInner from '@/components/layout/ProductsInner/ProductsInner'
import VideoWrap from '@/components/layout/VideoWrap/VideoWrap'
import WhyWrap from '@/components/layout/WhyWrap/WhyWrap'
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle'
import React from 'react'

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <HeroBanner />
      <ProductsInner />
      <AboutWrap />
      <VideoWrap />
      <WhyWrap />
    </>
  )
}

export default Home