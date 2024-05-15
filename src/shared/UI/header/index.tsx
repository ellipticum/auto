'use client'

import React from 'react'

import styles from './styles.module.scss'

import Buttons from '@/shared/UI/buttons'

import Logo from '@/shared/UI/logo'
import Container from '@/shared/UI/layouts/container'

import ToggleModeButton from '@/features/toggle-mode-button'
import ProfileButton from '@/features/profile-button'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Logo />
                <div className={styles.buttons}>
                    <ProfileButton />
                    <ToggleModeButton />
                </div>
            </Container>
        </header>
    )
}

export default Header
