'use client'

import React from 'react'

import Image from 'next/image'

import { useRouter } from 'next/navigation'

import styles from './styles.module.scss'

import Container from '@/shared/UI/layouts/container'

import { ICar } from '@/shared/store/auth'
import Car from '@/widgets/car/UI'

interface Props {
    cars: ICar[] | undefined
}

const CatalogPreview = ({ cars }: Props) => {
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

                {cars ? (
                    <div className={styles.cars}>
                        {cars.map((car, index) => {
                            return <Car {...car} />
                        })}
                    </div>
                ) : (
                    <div>Что-то пошло не так</div>
                )}

                <button className={styles.button} onClick={() => router.push('/catalog')}>
                    Перейти в каталог
                </button>
            </Container>
        </section>
    )
}

export default CatalogPreview
