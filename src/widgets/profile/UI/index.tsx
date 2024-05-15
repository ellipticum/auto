'use client'

import React, { useEffect } from 'react'

import styles from './styles.module.scss'

import useAuthStore, { IOrder } from '@/shared/store/auth'
import { useRouter } from 'next/navigation'
import Container from '@/shared/UI/layouts/container'
import useOrderDetailsStore from '@/widgets/order-details/model/store'

const Profile = () => {
    const { profile } = useAuthStore()
    const { setOrder, setIsOrderDetailsHidden } = useOrderDetailsStore()

    const router = useRouter()

    const handleClick = (order: IOrder) => {
        setOrder(order)
        setIsOrderDetailsHidden(false)
    }

    if (!profile) {
        return null
    }

    return (
        <div className={styles.profile}>
            <Container>
                <h1 className={styles.name}>
                    {profile.firstName} {profile.lastName}
                </h1>
                <div className={styles.content}>
                    <h2 className={styles.heading}>История заказов</h2>
                    <div className={styles.orders}>
                        {profile.orders.map((order) => (
                            <div
                                key={order.id}
                                className={styles.order}
                                onClick={() => handleClick(order)}
                            >
                                <p>{order.car.name}</p>
                                <p>
                                    Время бронирования:{' '}
                                    <span>
                                        {new Date(order.bookingTime * 1000).toLocaleString()}
                                    </span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Profile
