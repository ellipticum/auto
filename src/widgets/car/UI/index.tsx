'use client'

import React, { useEffect, useState } from 'react'
import { ICar } from '@/shared/store/auth'
import styles from '@/widgets/cards/UI/styles.module.scss'
import { useRouter } from 'next/navigation'
import cn from 'classnames'
import useEmblaCarousel from 'embla-carousel-react'

const Car = (car: ICar) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center' })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const router = useRouter()

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        }

        emblaApi.on('select', onSelect)
        onSelect()

        return () => {
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi])

    return (
        <div className={styles.car} onClick={() => router.push(`/catalog/${car.id}`)}>
            <div className={styles.viewport} ref={emblaRef}>
                <div className={styles.tape}>
                    {car.images.map((image, index) => (
                        <div
                            key={index}
                            className={cn(styles.container, {
                                [styles.active]: index === selectedIndex
                            })}
                        >
                            <img src={image} alt={`Image ${index + 1}`} className={styles.image} />
                        </div>
                    ))}
                </div>
            </div>
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
