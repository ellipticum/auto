import React from 'react'

import Wrapper from '@/shared/UI/layouts/wrapper'

import Login from '@/widgets/login/UI'
import Header from '@/shared/UI/header'

const Page = () => {
    return (
        <Wrapper>
            <Header />
            <Login />
        </Wrapper>
    )
}

export default Page
