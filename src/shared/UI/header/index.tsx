'use client'

import React from 'react'

import styles from './styles.module.scss'

import Buttons from '@/shared/UI/buttons'

import Logo from '@/shared/UI/logo'
import Container from '@/shared/UI/layouts/container'

import ToggleModeButton from '@/features/toggle-mode-button'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Logo />
                <ToggleModeButton />
            </Container>
        </header>
    )
}

export default Header
