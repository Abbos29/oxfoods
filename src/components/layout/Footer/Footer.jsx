import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import s from './Footer.module.scss'
import Container from '@/components/ui/Container/Container'
import Button from '@/components/ui/Button/Button'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <Container>
                <div className={s.footer__top}>
                    <Link href="/" className={s.footer__logo}>
                        <Image src="/img/logo-main.svg" alt="logo" width={110} height={40} />
                    </Link>
                    <p className={s.footer__topText}>Для стройки и ремонта</p>
                    <Link href="/catalog">
                        <Button>
                            Каталог
                        </Button>
                    </Link>


                </div>

                <a
                    href="https://maps.app.goo.gl/9gkHazVLsH2CkpyHA"
                    className={`${s.footer__itemLink} ${s.link} ${s.footer__mapMobile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Москва, ул.Шипиловская, д.58, к.1, 115580
                </a>

                <div className={s.footer__wrapper}>
                    <div className={`${s.footer__item} ${s.firstItem}`}>
                        <p className={`${s.footer__itemLink} ${s.bold}`}>Контакты</p>
                        <a href="tel:+79125334018" className={s.footer__itemLink}>+7 (912) 533-40-18</a>
                        <a href="mailto:office@fukudamarket.ru" className={s.footer__itemLink}>office@fukudamarket.ru</a>
                        <a
                            href="https://maps.app.goo.gl/9gkHazVLsH2CkpyHA"
                            className={`${s.footer__itemLink} ${s.footer__map}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Москва, ул.Шипиловская, <br />
                            д.58, к.1, 115580
                        </a>
                    </div>

                    <div className={s.footer__item}>
                        <Link href="/about" className={`${s.footer__itemLink} ${s.link} ${s.bold}`}>О нас</Link>
                        <Link href="/about#about" className={`${s.footer__itemLink} ${s.link}`}>О компании</Link>
                        <Link href="/about#why" className={`${s.footer__itemLink} ${s.link}`}>Преимущества</Link>
                        <Link href="/about#center" className={`${s.footer__itemLink} ${s.link}`}>Сервисный центр</Link>
                        <Link href="/collab" className={`${s.footer__itemLink} ${s.link}`}>Сотрудничество</Link>
                    </div>

                    <div className={s.footer__item}>
                        <Link href="/catalog" className={`${s.footer__itemLink} ${s.link} ${s.bold}`}>Каталог</Link>
                        <Link href="/catalog" className={`${s.footer__itemLink} ${s.link}`}>Лазерные уровни</Link>
                        <Link href="/catalog" className={`${s.footer__itemLink} ${s.link}`}>Присоски</Link>
                        <Link href="/catalog" className={`${s.footer__itemLink} ${s.link}`}>Разметочный инструмент</Link>
                        <Link href="/catalog" className={`${s.footer__itemLink} ${s.link}`}>Штативы и штанги</Link>
                        <Link href="/catalog" className={`${s.footer__itemLink} ${s.link}`}>Строительные фены</Link>
                    </div>

                    <div className={`${s.footer__item} ${s.itemLast}`}>
                        <p className={`${s.footer__itemLink} ${s.bold}`}>Купить товары</p>
                        <a
                            href="https://market.yandex.ru/business--boom-tools/999679"
                            className={`${s.footer__itemLink} ${s.link} ${s.gold}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Яндекс маркет
                            <Image src="/img/slider-btn-icon.svg" alt="icon" width={16} height={16} />
                        </a>

                        <a
                            href="https://www.ozon.ru/seller/boom-28456/products/?miniapp=seller_28456"
                            className={`${s.footer__itemLink} ${s.link} ${s.gold}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ozon
                            <Image src="/img/slider-btn-icon.svg" alt="icon" width={16} height={16} />
                        </a>

                        <a
                            href="https://www.wildberries.ru/seller/106728"
                            className={`${s.footer__itemLink} ${s.link} ${s.gold}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Wildberries
                            <Image src="/img/slider-btn-icon.svg" alt="icon" width={16} height={16} />
                        </a>

                        <Link href="/policy" className={`${s.footer__itemLink} ${s.link} ${s.policy}`}>
                            Политика конфиденциальности
                        </Link>
                    </div>
                </div>

                <div className={s.footer__inner}>
                    <div className={s.footer__soc}>
                        <a
                            className={s.footer__socLink}
                            href="https://api.whatsapp.com/send?phone=79125334018"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src="/img/icon-twitter.svg" alt="twitter" width={22} height={22} />
                        </a>
                        <a
                            className={s.footer__socLink}
                            href="https://www.instagram.com/boom_construction_tools/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src="/img/icon-insta.svg" alt="instagram" width={22} height={22} />
                        </a>
                    </div>

                    <p className={s.footer__copyright}>Copyright © 2025 OxFoods</p>

                    {/* <a
                        className={s.footer__made}
                        target="_blank"
                        href="https://studiom416.com/"
                        rel="noopener noreferrer"
                    >
                        Site made by
                        <Image src="/img/brand-logo.svg" alt="logo" width={80} height={20} />
                    </a> */}
                </div>
            </Container>
        </footer>
    )
}

export default Footer