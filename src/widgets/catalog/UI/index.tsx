'use client'

import React, { useState } from 'react'

import Image from 'next/image'

import { useRouter } from 'next/navigation'

import styles from './styles.module.scss'

import Container from '@/shared/UI/layouts/container'

import { ICar } from '@/shared/store/auth'

interface Props {
    cars: ICar[] | undefined
}

const Catalog = ({ cars }: Props) => {
    const router = useRouter()

    const [filteredCars, setFilteredCars] = useState(cars)

    const filter = (query: string) => {
        if (!cars) {
            return
        }

        const filtered = cars.filter((car) => car.name.toLowerCase().includes(query.toLowerCase()))
        setFilteredCars(filtered)
    }

    return (
        <section className={styles.section}>
            <Container>
                <div>
                    <input
                        className={styles.input}
                        type='text'
                        placeholder='Поиск'
                        onChange={(event) => filter(event.target.value)}
                    />
                </div>
                {filteredCars ? (
                    <div className={styles.cars}>
                        {filteredCars.map((car, index) => (
                            <div
                                className={styles.car}
                                key={index}
                                onClick={() => router.push(`/catalog/${car.id}`)}
                            >
                                <img
                                    className={styles.image}
                                    src={car.images[0]}
                                    alt={car.name}
                                    width={400}
                                    height={400}
                                />
                                <div className={styles.info}>
                                    <h3 className={styles.name}>{car.name}</h3>
                                    <p className={styles.description}>{car.description}</p>
                                    <div className={styles.properties}>
                                        {car.properties.map((property, index) => (
                                            <div className={styles.property} key={index}>
                                                <p className={styles.propertyName}>
                                                    {property.name}
                                                </p>
                                                <p>•</p>
                                                <p className={styles.propertyValue}>
                                                    {property.value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>Что-то пошло не так</div>
                )}

                {filteredCars && filteredCars.length === 0 && (
                    <div className={styles.meta}>
                        <h1>Ничего не найдено :(</h1>
                    </div>
                )}
            </Container>
        </section>
    )
}

export default Catalog
