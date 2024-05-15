import React from 'react'

import Wrapper from '@/shared/UI/layouts/wrapper'

import Intro from '@/widgets/intro/UI'
import CatalogPreview from '@/widgets/catalog-preview/UI'
import Header from '@/shared/UI/header'
import getCars from '@/shared/utils/get-cars'

const Page = async () => {
    const cars = await getCars(12)

    return (
        <Wrapper>
            <Header />
            <Intro />
            <CatalogPreview cars={cars} />
        </Wrapper>
    )
}

export default Page
