import React from 'react'

import styles from './styles.module.scss'

import Container from '@/shared/UI/layouts/container'
import Header from '@/shared/UI/header'
import Link from 'next/link'

const Intro = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.overlay} />
            <div className={styles.content}>
                <Header />
                <Container>
                    <div className={styles.info}>
                        <h1 className={styles.heading}>
                            Роскошь в движении: <br /> начните своё путешествие
                        </h1>
                        <h2 className={styles.subheading}>
                            Исследуйте, наслаждайтесь, ощущайте – автомобили на любой случай
                        </h2>
                    </div>
                    <Link className={styles.link} href='/catalog'>
                        Перейти в каталог
                    </Link>
                </Container>
            </div>
        </div>
    )
}

export default Intro
