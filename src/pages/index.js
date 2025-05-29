import AboutWrap from '@/components/layout/AboutWrap/AboutWrap'
import Header from '@/components/layout/Header/Header'
import Hero from '@/components/layout/Hero/Hero'
import ProductsInner from '@/components/layout/ProductsInner/ProductsInner'
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle'
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsInner />
      <AboutWrap />
    </>
  )
}

export default Home