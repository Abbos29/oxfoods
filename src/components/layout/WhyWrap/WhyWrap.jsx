import React from 'react'
import s from './WhyWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'

const WhyWrap = () => {
    return (
        <>
            <section className={s.why} id="why">
                <Container>
                    <SectionTitle>Почему клиенты выбирают нас</SectionTitle>

                    <div className={s.whyWrapper}>
                        <div className={`${s.whyItem} ${s.item1}`}>
                            <div className={s.whyIcon}>
                                <img src="./img/why-1.svg" alt="why-icon" />
                            </div>

                            <h3 className={s.whyName}>Цена и качество</h3>

                            <p className={s.whyText}>Высокое качество по доступным ценам</p>
                        </div>

                        <div className={`${s.whyItem} ${s.item2}`}>
                            <div className={s.whyIcon}>
                                <img src="./img/why-2.svg" alt="why-icon" />
                            </div>

                            <h3 className={s.whyName}>Большой ассортимент</h3>

                            <p className={s.whyText}>Создаем и дорабатываем инструменты, чтобы облегчить работу для вас</p>
                        </div>

                        <div className={`${s.whyItem} ${s.item3}`}>
                            <div className={s.whyIcon}>
                                <img src="./img/why-3.svg" alt="why-icon" />
                            </div>

                            <h3 className={s.whyName}>Контроль качества</h3>

                            <p className={s.whyText}>Проверяем товар <br />
                                на всех этапах, в том числе перед отправкой.</p>
                        </div>

                        <div className={`${s.whyItem} ${s.item4}`}>
                            <div className={s.whyIcon}>
                                <img src="./img/why-4.svg" alt="why-icon" />
                            </div>

                            <h3 className={s.whyName}>Быстрая доставка</h3>

                            <p className={s.whyText}>Обычно до 3-х дней, но мы делаем все для ее ускорения даже в самые удаленные
                                регионы.</p>
                        </div>

                        <div className={`${s.whyItem} ${s.item5}`}>
                            <div className={s.whyIcon}>
                                <img src="./img/why-5.svg" alt="why-icon" />
                            </div>

                            <h3 className={s.whyName}>Гарантия до 2-х лет</h3>

                            <p className={s.whyText}>Проблемы с инструментом? Исправим в собственном сервисном центре бесплатно.</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default WhyWrap