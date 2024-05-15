import React, { ChangeEvent, useEffect, useState } from 'react'
import Modal from '@/shared/UI/modal/UI'
import styles from './styles.module.scss'
import useOrderWindowStore from '@/widgets/order-window/model/store'
import notify from '@/shared/utils/notify'
import createOrder from '@/shared/utils/order'
import useAuthStore from '@/shared/store/auth'

enum Variant {
    Week = 'week',
    Day = 'day',
    Hour = 'hour'
}

const OrderWindow = () => {
    const { profile } = useAuthStore()
    const { isOrderWindowHidden, setIsOrderWindowHidden, car } = useOrderWindowStore()

    const [sum, setSum] = useState(0)
    const [quantity, setQuantity] = useState('')
    const [variant, setVariant] = useState(Variant.Week)

    useEffect(() => {
        if (car) {
            defineSum()
        }
    }, [quantity, variant, car])

    const values = car
        ? {
              [Variant.Week]: {
                  price: car.weeklyPrice,
                  seconds: 604800
              },
              [Variant.Day]: {
                  price: car.dailyPrice,
                  seconds: 86400
              },
              [Variant.Hour]: {
                  price: car.hourlyPrice,
                  seconds: 3600
              }
          }
        : {
              [Variant.Week]: { price: 0, seconds: 0 },
              [Variant.Day]: { price: 0, seconds: 0 },
              [Variant.Hour]: { price: 0, seconds: 0 }
          }

    const defineSum = () => {
        setSum(Number(quantity) * values[variant].price)
    }

    const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value

        if (/^(?!0)\d{0,3}$/.test(inputValue)) {
            setQuantity(inputValue)
        }
    }

    const handleClick = async () => {
        if (!quantity) {
            notify({ error: 'Заполните поле' })
            return
        }

        if (!car || !profile) {
            return
        }

        const payload = {
            userId: profile.id,
            carId: car.id,
            bookingDuration: values[variant].seconds * Number(quantity),
            sum
        }

        const { data } = await createOrder(payload)

        console.log(data)

        setIsOrderWindowHidden(true)
    }

    if (!car || !profile) {
        return null
    }

    return (
        <Modal isHidden={isOrderWindowHidden} setIsHidden={setIsOrderWindowHidden}>
            <div className={styles.content}>
                <input
                    className={styles.input}
                    type='text'
                    value={quantity}
                    placeholder='Количество'
                    onChange={handleQuantityChange}
                />
                <select
                    className={styles.select}
                    name=''
                    id=''
                    onChange={(event) => setVariant(event.target.value as Variant)}
                >
                    <option className={styles.option} value='week'>
                        Недель
                    </option>
                    <option className={styles.option} value='day'>
                        Дней
                    </option>
                    <option className={styles.option} value='hour'>
                        Часов
                    </option>
                </select>
                <p>Всего: {sum}</p>
                <button className={styles.button} onClick={handleClick}>
                    Продолжить
                </button>
            </div>
        </Modal>
    )
}

export default OrderWindow
