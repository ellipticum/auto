'use client'

import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import useAuthStore, { ICar } from '@/shared/store/auth'
import Container from '@/shared/UI/layouts/container'
import useEmblaCarousel from 'embla-carousel-react'
import cn from 'classnames'
import useOrderWindowStore from '@/widgets/order-window/model/store'
import { useRouter } from 'next/navigation'

interface Props {
    car: ICar | undefined
}

const CarInfo = ({ car }: Props) => {
    const { isAuth } = useAuthStore()
    const { setIsOrderWindowHidden, setCar } = useOrderWindowStore()

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })

    const [selectedIndex, setSelectedIndex] = useState(0)

    const router = useRouter()

    if (!car) {
        return null
    }

    const scrollTo = (index: number) => {
        if (emblaApi) {
            emblaApi.scrollTo(index)
        }
    }

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
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.images}>
                        <div className={styles.viewport} ref={emblaRef}>
                            <div className={styles.tape}>
                                {car.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={cn(styles.container, {
                                            [styles.active]: index === selectedIndex
                                        })}
                                    >
                                        <img
                                            src={image}
                                            alt={`Image ${index + 1}`}
                                            className={styles.image}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.dump}>
                            {car.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    className={styles.preview}
                                    onClick={() => scrollTo(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.ultra}>
                            <h1 className={styles.heading}>{car.name}</h1>
                            <p className={styles.description}>{car.description}</p>
                            <div className={styles.prices}>
                                <p className={styles.price}>{car.weeklyPrice} / неделя</p>
                                <p className={styles.price}>{car.dailyPrice} / день</p>
                                <p className={styles.price}>{car.hourlyPrice} / час</p>
                            </div>
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
                        <div className={styles.buttons}>
                            <button
                                className={styles.button}
                                onClick={() => {
                                    if (!isAuth) {
                                        router.push('/')

                                        return
                                    }

                                    setCar(car)
                                    setIsOrderWindowHidden(false)
                                }}
                            >
                                Арендовать
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CarInfo
