import React from 'react'
import s from './ErrorWrap.module.scss'
import Container from '../Container/Container'
import Link from 'next/link'

const ErrorWrap = () => {
    return (
        <section className={s.ErrorWrap}>
            <Container>
                <div className={s.content}>
                    <h1 className={s.code}>404</h1>
                    <p className={s.message}>Страница не найдена</p>
                    <p className={s.subtext}>Возможно, она была перемещена или удалена.</p>
                    <Link href="/" className={s.btn}>
                        На главную
                    </Link>
                </div>
            </Container>
        </section>
    )
}

export default ErrorWrap
