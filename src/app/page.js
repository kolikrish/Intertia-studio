'use client'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
import UseTablet from '@/components/Responsive/UseTablet'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Home/Hero'

const About = dynamic(() => import('@/components/Home/About'), {
  loading: () => <div>Loading...</div>
})
const Works = dynamic(() => import('@/components/Home/Works'), {
  loading: () => <div>Loading...</div>
})
const WorksMobile = dynamic(() => import('@/components/Home/WorksMobile'), {
  loading: () => <div>Loading...</div>
})
const HelpingBrand = dynamic(() => import('@/components/Home/HelpingBrand'), {
  loading: () => <div>Loading...</div>
})
const VideoSection = dynamic(() => import('@/components/Home/VideoSection'), {
  loading: () => <div>Loading...</div>
})
const IdeasInMotion = dynamic(() => import('@/components/Home/IdeasInMotion'), {
  loading: () => <div>Loading...</div>
})
const Footer = dynamic(() => import('@/components/Home/Footer'), {
  loading: () => <div>Loading...</div>
})
const FooterMobile = dynamic(() => import('@/components/Home/FooterMobile'), {
  loading: () => <div>Loading...</div>
})

export default function page() {
  const isTablet = UseTablet();
  return (
    <>
      <NavBar />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        {!isTablet && <About />}
        {isTablet ? <WorksMobile /> : <Works />}
        <HelpingBrand />
        <VideoSection />
        <IdeasInMotion />
        {isTablet ? <FooterMobile /> : <Footer />}
      </Suspense>
    </>
  )
}
