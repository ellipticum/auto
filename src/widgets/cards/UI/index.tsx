'use client'

import React from 'react'

import Image from 'next/image'

import { useRouter } from 'next/navigation'

import styles from './styles.module.scss'

import Container from '@/shared/UI/layouts/container'
import Car from '@/widgets/car/UI'
import { ICar } from '@/shared/store/auth'

const CatalogPreview = (cars: ICar[]) => {
    const router = useRouter()

    return (
        <section className={styles.section}>
            <Container>
                <div className={styles.content}>
                    <h1 className={styles.heading}>Каталог автомобилей</h1>
                    <p className={styles.subheading}>
                        Выберите автомобиль, удобную для вас смену и подобрать условия поездки
                    </p>
                </div>

                <div className={styles.cars}>
                    {cars.map((car, index) => {
                        return <Car {...car} />
                    })}
                </div>

                <button className={styles.button}>Перейти в каталог</button>
            </Container>
        </section>
    )
}

export default CatalogPreview
