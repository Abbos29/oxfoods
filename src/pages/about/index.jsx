import AboutHero from '@/components/layout/AboutHero/AboutHero'
import AboutWrap from '@/components/layout/AboutWrap/AboutWrap'
import VideoWrap from '@/components/layout/VideoWrap/VideoWrap'
import WhyWrap from '@/components/layout/WhyWrap/WhyWrap'
import React from 'react'

const AboutPage = () => {
    return (
        <>
            <AboutHero />
            <WhyWrap />
            <VideoWrap />
            <AboutWrap />

        </>
    )
}

export default AboutPage