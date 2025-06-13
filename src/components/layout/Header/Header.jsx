import React, { useState } from 'react';
import s from './Header.module.scss';
import Container from '@/components/ui/Container/Container';
import Link from 'next/link';
import Image from 'next/image';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import Button from '@/components/ui/Button/Button';

import { FaBalanceScaleLeft, FaInstagram, FaPercent, FaPercentage, FaSearch, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import { IoIosMenu } from 'react-icons/io';
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle';


const Header = () => {
    const [burgerActive, setBurgerActive] = useState(false);

    const handleBurgerClick = () => {
        setBurgerActive(prev => !prev);
    };

    const closeMenu = () => {
        setBurgerActive(false)
    }

    return (
        <header className={s.header}>
            <nav className={s.navbar}>
                <Container>
                    <div className={s.navbarInner}>
                        <div className={s.logo}>
                            <Link href="/" onClick={closeMenu}>
                                <Image className='logo' src="/img/logo-main.svg" alt="logo" width={40} height={40} />
                            </Link>
                            <span>Оборудование для пекарен <br /> и кондитерских</span>
                        </div>

                        <div className={`${s.menu} ${burgerActive ? s.active : ''}`}>
                            <Link onClick={closeMenu} href="/brands" className={s.link}>Бренды</Link>
                            <Link onClick={closeMenu} href="/service" className={s.link}>Сервис</Link>
                            <Link onClick={closeMenu} href="/contacts" className={s.link}>Контакты</Link>
                            <Link onClick={closeMenu} href="/delivery" className={s.link}>Доставка</Link>
                            <Link onClick={closeMenu} href="/about" className={s.link}>О нас</Link>
                            <Link onClick={closeMenu} href="/arrivals" className={s.link}>Новинки</Link>
                            <Link onClick={closeMenu} href="/discounts" className={s.link}>Акции</Link>

                            {/* <Dropdown className={s.dropdown} mainLabel="Каталог" mainHref="/catalog">
                                <Link href="/#slider1">Лазерные уровни</Link>
                                <Link href="/#slider2">Присоски</Link>
                                <Link href="/#slider3">Разметочный инструмент</Link>
                                <Link href="/#slider4">Штативы и штанги</Link>
                                <Link href="/#slider5">Строительные фены</Link>
                            </Dropdown> */}

                            <div className={s.menuSoc}>
                                <a href="tel:+998933770060" className={s.link}>+998 93 377-00-60</a>
                            </div>
                        </div>

                        {/* <div className={s.menuSoc}>
                            <a href="tel:+998933770060" className={s.link}>+998 93 377-00-60</a>
                        </div> */}

                        {/* <div className={s.socials}>
                            <a href="https://api.whatsapp.com/send?phone=79125334018" target="_blank">
                                <FaWhatsapp />
                            </a>
                            <a href="https://www.youtube.com/@fukudamarket7021" target="_blank">
                                <FaYoutube />
                            </a>
                            <a href="https://www.instagram.com/boom_construction_tools/" target="_blank">
                                <FaInstagram />
                            </a>
                        </div> */}

                        <div className={s.menuBtn}>
                            <Button>Обратный звонок</Button>
                        </div>

                        <div
                            className={`${s.burger} ${burgerActive ? s.active : ''}`}
                            onClick={handleBurgerClick}
                        >
                            <span></span>
                        </div>
                    </div>

                    <div className={s.navbarBottom}>

                        <div className={s.catalogBtn}>
                            <Button>
                                <IoIosMenu />
                                Каталог
                            </Button>
                        </div>

                        <div className={s.discountBtn}>
                            <Button>
                                <FaPercentage />
                                Акции
                            </Button>
                        </div>

                        <div className={s.searchBox}>
                            <input type="text" placeholder='Поиск по товарам' />

                            <FaSearch className={s.icon} />
                        </div>

                        <div className={s.contactInfo}>
                            <a href="tel:+998332223390">+998 33 222 33 90</a>
                            <p>ПН-ПТ. с 10:00 до 18:00</p>
                        </div>

                        <div className={s.infoBox}>
                            <ThemeToggle />

                            <Link href={`/`}><FaBalanceScaleLeft /></Link>
                            <Link href={`/`}><FaCartShopping /></Link>
                        </div>

                    </div>
                </Container>
            </nav>
        </header>
    );
};

export default Header;
