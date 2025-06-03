import React from 'react'
import s from './AboutHero.module.scss'
import Container from '@/components/ui/Container/Container'
import Link from 'next/link'

const AboutHero = () => {
    return (
        <>
            <section className={s.about}>
                <Container>
                    <div className={s.aboutWrapper}>
                        <div className={s.aboutItem}>
                            <div className={s.beardWrapper}>
                                <Link className={s.beardBack} href="/">
                                    <img src="/img/beard-back.svg" alt="icon" />
                                </Link>

                                <ul className={s.beardMenu}>
                                    <li className={s.beardItem}><Link href="/">Главная</Link></li>
                                    <li className={s.beardIcon}><img src="/img/beard-icon.svg" alt="icon" /></li>
                                    <li className={`${s.beardItem} ${s.active}`}><Link href="/about">О нас</Link></li>
                                </ul>
                            </div>

                            <h1 className={`${s.aboutTitle} ${s.heroTitle}`}>Boom Tools</h1>
                            <p className={`${s.aboutPretitle} ${s.heroPretitle}`}>Профессиональный инструмент <br /> для строительства и ремонта</p>
                        </div>

                        <div className={s.aboutImg}></div>

                        <img className={s.aboutImgMobile} src="/img/hero-2-mobile.webp" alt="img" />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default AboutHero