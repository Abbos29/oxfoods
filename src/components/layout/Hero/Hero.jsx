// Hero.tsx
import React from 'react'
import Image from 'next/image'
import s from './Hero.module.scss'
import Container from '@/components/ui/Container/Container'

const Hero = () => {
    return (
        <section className={`${s.hero} hero`}>
            <Container>
                <div className={s.hero__wrapper}>
                    <div className={s.hero__item}>
                        <h1 className={s.hero__title}>Boom tools</h1>

                        <p className={s.hero__pretitle}>
                            Профессиональный инструмент <br />
                            для строительства и ремонта
                        </p>

                        <div className={s.hero__list}>
                            <p className={s.hero__listItem}>
                                <Image 
                                    src="/img/hero-icon-1.svg" 
                                    alt="icon" 
                                    width={20} 
                                    height={20}
                                />
                                Два года гарантийного обслуживания
                            </p>

                            <p className={`${s.hero__listItem} ${s.item2}`}>
                                <Image 
                                    src="/img/hero-icon-2.svg" 
                                    alt="icon" 
                                    width={20} 
                                    height={20}
                                />
                                Собственный сервисный центр
                            </p>

                            <p className={s.hero__listItem}>
                                <Image 
                                    src="/img/hero-icon-3.svg" 
                                    alt="icon" 
                                    width={20} 
                                    height={20}
                                />
                                Быстрая доставка до 3 дней
                            </p>
                        </div>
                    </div>

                    <div className={s.hero__img}>
                        <Image 
                            src="/img/hero-image.webp" 
                            alt="hero-img" 
                            width={700} 
                            height={500}
                            priority
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Hero

