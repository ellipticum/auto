import React from 'react'

import styles from '@/shared/styles/pages/profile.module.scss'

import Wrapper from '@/shared/UI/layouts/wrapper'

import Header from '@/shared/UI/header'

import Profile from '@/widgets/profile/UI'

const Page = () => {
    return (
        <Wrapper>
            <Header />
            <Profile />
        </Wrapper>
    )
}

export default Page
