// ProductsInner.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import s from './ProductsInner.module.scss'
import Container from '@/components/ui/Container/Container'
import ContainerMax from '@/components/ui/Container/ContainerMax'

const ProductsInner = () => {
    const products = [
        {
            id: 1,
            image: '/img/catalog/lazer/boom-3d/IMG_1788.webp',
            features: ['От 10 см до 4.2 метров', 'Для всех типов инструментов'],
            description: 'Облегчают работу с измерительным инструментом, позволяя работать на любой высоте'
        },
        {
            id: 2,
            image: '/img/catalog/lazer/boom-3d/IMG_1791.webp',
            features: ['От 10 см до 4.2 метров', 'Для всех типов инструментов'],
            description: 'Облегчают работу с измерительным инструментом, позволяя работать на любой высоте'
        },
        {
            id: 3,
            image: '/img/catalog/lazer/boom-4d/IMG_1744.webp',
            features: ['От 10 см до 4.2 метров', 'Для всех типов инструментов'],
            description: 'Облегчают работу с измерительным инструментом, позволяя работать на любой высоте'
        },
        {
            id: 4,
            image: '/img/catalog/lazer/boom-3d/IMG_1828.webp',
            features: ['От 10 см до 4.2 метров', 'Для всех типов инструментов'],
            description: 'Облегчают работу с измерительным инструментом, позволяя работать на любой высоте'
        },
        {
            id: 5,
            image: '/img/catalog/lazer/boom-4d/IMG_1779.webp',
            features: ['От 10 см до 4.2 метров', 'Для всех типов инструментов'],
            description: 'Облегчают работу с измерительным инструментом, позволяя работать на любой высоте'
        },
        {
            id: 6,
            image: '/img/catalog/lazer/boom-3d/IMG_1899.webp',
            features: ['От 10 см до 4.2 метров', 'Для всех типов инструментов'],
            description: 'Облегчают работу с измерительным инструментом, позволяя работать на любой высоте'
        },
        {
            id: 7,
            image: '/img/catalog/lazer/boom-4d/IMG_1847.webp',
            features: ['От 10 см до 4.2 метров', 'Для всех типов инструментов'],
            description: 'Облегчают работу с измерительным инструментом, позволяя работать на любой высоте'
        },
        {
            id: 8,
            image: '/img/catalog/lazer/boom-3d/IMG_1828.webp',
            features: ['От 10 см до 4.2 метров', 'Для всех типов инструментов'],
            description: 'Облегчают работу с измерительным инструментом, позволяя работать на любой высоте'
        }
    ]

    return (
        <section id="products-section" className={`${s.productsInner} ${s.productsInner1}`}>
            <Container>
                <div className={s.productsInner__top}>
                    <p className={s.productsInner__topNum}>01.</p>
                    <h2 className={s.sectionTitle}>Каталог</h2>

                    <div className={s.productsInner__topBtns}>
                        <button className={s.navButton} type="button">
                            <Image src="/img/slider-prev.svg" alt="prev" width={24} height={24} />
                        </button>
                        <button className={s.navButton} type="button">
                            <Image src="/img/slider-next.svg" alt="next" width={24} height={24} />
                        </button>
                    </div>
                </div>

                <div className={s.productsInner__grid}>
                    {products.map((product) => (
                        <div key={product.id} className={s.productsInner__card}>
                            <div className={s.productsInner__cardImg}>
                                <Image
                                    src={product.image}
                                    alt="product image"
                                    width={400}
                                    height={300}
                                    className={s.productsInner__img}
                                />
                            </div>

                            <div className={s.productsInner__box}>
                                <div className={s.productsInner__boxList}>
                                    {product.features.map((feature, index) => (
                                        <p key={index} className={s.productsInner__boxItem}>
                                            {feature}
                                        </p>
                                    ))}
                                </div>

                                <p className={s.productsInner__boxText}>
                                    <Image src="/img/icon-cube.svg" alt="cube" width={20} height={20} />
                                    {product.description}
                                </p>

                                <Link href="/catalog" className={s.productsInner__boxBtn}>
                                    В каталог
                                    <Image src="/img/slider-btn-icon.svg" alt="" width={16} height={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

        </section>
    )
}

export default ProductsInner