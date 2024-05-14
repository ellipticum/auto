'use client'

import React from 'react'

import styles from './styles.module.scss'

import Buttons from '@/shared/UI/buttons'

import Logo from '@/shared/UI/logo'
import Container from '@/shared/UI/layouts/container'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Logo />
                <div className={styles.buttons}>
                    <Buttons.Default onClick={() => {}}>Ученикам</Buttons.Default>
                    <Buttons.Accent onClick={() => {}}>Преподавателям</Buttons.Accent>
                </div>
            </Container>
        </header>
    )
}

export default Header
