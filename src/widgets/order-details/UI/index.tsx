import React from 'react'
import Image from 'next/image'
import Modal from '@/shared/UI/modal/UI'
import styles from './styles.module.scss'
import { IOrder } from '@/shared/store/auth'
import useOrderDetailsStore from '@/widgets/order-details/model/store'
import cn from 'classnames'

const OrderDetails = () => {
    const { isOrderDetailsHidden, setIsOrderDetailsHidden, order } = useOrderDetailsStore()

    if (!order) {
        return
    }

    const { id, car, bookingTime, bookingDuration } = order

    const endDate = bookingDuration * 1000
    const startDate = bookingTime * 1000

    const isExpired = startDate + endDate < Date.now()

    return (
        <Modal isHidden={isOrderDetailsHidden} setIsHidden={setIsOrderDetailsHidden}>
            <div className={styles.content}>
                <div>
                    <Image
                        className={styles.image}
                        src={car.images[0]}
                        alt={car.name}
                        width={400}
                        height={400}
                    />
                </div>
                <div className={styles.header}>
                    <span className={styles.key}>ID #{id}</span>
                    <span className={styles.key}>{new Date(startDate).toLocaleString()}</span>
                </div>
                <h3 className={styles.name}>{car.name}</h3>
                <div className={styles.duration}>
                    {!isExpired && <span>до</span>}{' '}
                    <span className={cn(styles.date, { [styles.default]: endDate < Date.now() })}>
                        {isExpired
                            ? '(время вышло)'
                            : new Date(startDate + endDate).toLocaleString('ru-RU')}
                    </span>
                </div>
            </div>
        </Modal>
    )
}

export default OrderDetails
