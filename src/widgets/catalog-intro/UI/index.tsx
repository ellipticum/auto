import React from 'react'

import styles from './styles.module.scss'
import Container from '@/shared/UI/layouts/container'
import Icons from '@/shared/UI/icons'
import Link from 'next/link'

const CatalogIntro = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.overlay} />
            <div className={styles.content}>
                <Container>
                    <div className={styles.info}>
                        <h1 className={styles.heading}>Каталог авто</h1>
                        <h2 className={styles.subheading}>
                            Выбирайте и пользуйтесь: в ассортименте более 110 автомобилей
                        </h2>
                    </div>
                    <Link className={styles.link} href='/'>
                        <span>Перейти на главную</span>
                        <Icons.Chevron variable='--identify-color-5' />
                    </Link>
                </Container>
            </div>
        </div>
    )
}

export default CatalogIntro
