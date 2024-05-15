'use client'

import React from 'react'
import { ICar } from '@/shared/store/auth'
import styles from '@/widgets/cards/UI/styles.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Car = (car: ICar) => {
    const router = useRouter()

    return (
        <div className={styles.car} onClick={() => router.push(`/catalog/${car.id}`)}>
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
                            <p className={styles.propertyName}>{property.name}</p>
                            <p>•</p>
                            <p className={styles.propertyValue}>{property.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Car
