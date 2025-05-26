import React, { useState } from 'react';
import s from './Header.module.scss';
import Container from '@/components/ui/Container/Container';
import Link from 'next/link';
import Image from 'next/image';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import Button from '@/components/ui/Button/Button';

import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";


const Header = () => {
    const [burgerActive, setBurgerActive] = useState(false);

    const handleBurgerClick = () => {
        setBurgerActive(prev => !prev);
    };

    return (
        <header className={s.header}>
            <nav className={s.navbar}>
                <Container>
                    <div className={s.navbarInner}>
                        <div className={s.logo}>
                            <Link href="/">
                                <Image className='logo' src="/img/logo.svg" alt="logo" width={40} height={40} />
                            </Link>
                            <span>Для стройки и ремонта</span>
                        </div>

                        <div className={`${s.menu} ${burgerActive ? s.active : ''}`}>
                            <Link href="/about" className={s.link}>О нас</Link>
                            <Link href="/collab" className={s.link}>Сотрудничество</Link>

                            <Dropdown className={s.dropdown} mainLabel="Каталог" mainHref="/catalog">
                                <Link href="/#slider1">Лазерные уровни</Link>
                                <Link href="/#slider2">Присоски</Link>
                                <Link href="/#slider3">Разметочный инструмент</Link>
                                <Link href="/#slider4">Штативы и штанги</Link>
                                <Link href="/#slider5">Строительные фены</Link>
                            </Dropdown>
                        </div>

                        <div className={s.menuSoc}>
                            <a href="tel:+79125334018" className={s.link}>+7(912)533-40-18</a>
                        </div>

                        <div className={s.socials}>
                            <a href="https://api.whatsapp.com/send?phone=79125334018" target="_blank">
                                <FaWhatsapp />
                            </a>
                            <a href="https://www.youtube.com/@fukudamarket7021" target="_blank">
                                <FaYoutube />
                            </a>
                            <a href="https://www.instagram.com/boom_construction_tools/" target="_blank">
                                <FaInstagram />
                            </a>
                        </div>

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
                </Container>
            </nav>
        </header>
    );
};

export default Header;
