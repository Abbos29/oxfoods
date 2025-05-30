import React from 'react'
import s from './VideoWrap.module.scss'
import Container from '@/components/ui/Container/Container'

const VideoWrap = () => {
    return (
        <>
            <section className={s.videoWrap}>
                <Container>
                    <div className={s.wrapper}>
                        <h2 className={s.title}>Профессиональные строители <br /> и домашние мастера о продукции Ox Foods</h2>

                        <div className={s.videos}>
                            <div className={s.video}>
                                <iframe width="380" height="210" src="https://www.youtube.com/embed/HREORV5-9mE" title="Лазерные Уровни BOOM. Недорогие и компактные. Boom DLT 12GX и Boom DLT 16GX. Лазер 3D или 4D Нивелир" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <p>Лазерные Уровни OxFoods.</p>
                            </div>
                            <div className={s.video}>
                                <iframe width="380" height="210" src="https://www.youtube.com/embed/HREORV5-9mE" title="Лазерные Уровни BOOM. Недорогие и компактные. Boom DLT 12GX и Boom DLT 16GX. Лазер 3D или 4D Нивелир" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <p>Лазерные Уровни BOOM. Недорогие и компактные. Boom DLT 12GX и Boom DLT 16GX. Лазер 3D или 4D Нивелир</p>
                            </div>
                            <div className={s.video}>
                                <iframe width="380" height="210" src="https://www.youtube.com/embed/HREORV5-9mE" title="Лазерные Уровни BOOM. Недорогие и компактные. Boom DLT 12GX и Boom DLT 16GX. Лазер 3D или 4D Нивелир" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <p>Лазерные Уровни OxFoods.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default VideoWrap