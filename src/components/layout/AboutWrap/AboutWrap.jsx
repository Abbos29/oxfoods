import React from 'react'
import Image from 'next/image'
import s from './AboutWrap.module.scss'
import Container from '@/components/ui/Container/Container'

const AboutWrap = () => {
    return (
        <section className={s.about} id="about">
            <Container>
                <h2 className={s.sectionTitle}>О компании</h2>

                <div className={s.about__wrapper}>
                    <div className={s.about__item}>
                        <Image 
                            className={s.about__itemImg} 
                            src="/img/owner.jpg" 
                            alt="about img"
                            width={550}
                            height={400}
                            priority
                        />
                    </div>

                    <div className={s.about__item}>
                        <p className={s.about__itemTitle}>Бендас Тимофей</p>
                        <p className={s.about__itemPretitle}>Генеральный директор и основатель бренда</p>
                    </div>

                    <div className={`${s.about__item} ${s.about__itemLogo}`}>
                        <Image 
                            src="/img/logo-main.svg" 
                            alt="logo"
                            width={400}
                            height={200}
                        />
                    </div>

                    <div className={s.about__item}>
                        <p className={s.about__itemText}>
                            В OxFoods мы стремимся быть ведущим поставщиком строительного инструмента и товаров для дома и ремонта, предлагая нашим клиентам высококачественные продукты по доступной цене.
                        </p>
                        <p className={s.about__itemText}>
                            Наша цель - предоставить широкий ассортимент продукции, который удовлетворит потребности как опытных строителей, так и любителей домашних ремонтных работ. Мы готовы предоставить высококлассный сервис и гарантированное обслуживание для каждого из наших клиентов.
                        </p>
                        <p className={s.about__itemText}>
                            Вместе с OxFoods вы можете быть уверены, что получите надежный инструмент для ваших проектов.
                        </p>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default AboutWrap

