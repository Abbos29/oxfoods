import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import s from './HeroBanner.module.scss'
import Container from '@/components/ui/Container/Container'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const HeroBanner = () => {
    const slides = [
        {
            id: 1,
            image: '/img/banner-1.png',
            alt: 'Баннер 1'
        },
        {
            id: 2,
            image: '/img/banner-1.png',
            alt: 'Баннер 2'
        },
        {
            id: 3,
            image: '/img/banner-1.png',
            alt: 'Баннер 3'
        }
    ]

    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const paginationRef = useRef(null)

    return (
        <section className={s.heroBanner}>
            <Container>
                <div className={s.wrapper}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        loop={true}
                        speed={800}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        onBeforeInit={(swiper) => {
                            if (typeof swiper.params.navigation !== 'boolean') {
                                swiper.params.navigation.prevEl = prevRef.current
                                swiper.params.navigation.nextEl = nextRef.current
                            }
                            if (typeof swiper.params.pagination !== 'boolean') {
                                swiper.params.pagination.el = paginationRef.current
                            }
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        pagination={{
                            el: paginationRef.current,
                            clickable: true,
                        }}
                        className={s.swiper}
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id} className={s.slide}>
                                <img 
                                    className={s.image} 
                                    src={slide.image} 
                                    alt={slide.alt} 
                                />
                            </SwiperSlide>
                        ))}

                        <div ref={prevRef} className={s.swiperButtonPrev}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div ref={nextRef} className={s.swiperButtonNext}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>

                        <div ref={paginationRef} className={s.swiperPagination}></div>
                    </Swiper>
                </div>
            </Container>
        </section>
    )
}

export default HeroBanner
