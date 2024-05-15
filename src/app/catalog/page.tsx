import React from 'react'
import Wrapper from '@/shared/UI/layouts/wrapper'
import Header from '@/shared/UI/header'
import CatalogIntro from '@/widgets/catalog-intro/UI'
import getCars from '@/shared/utils/get-cars'
import Catalog from '@/widgets/catalog/UI'

const Page = async () => {
    const cars = await getCars()

    return (
        <Wrapper>
            <Header />
            <CatalogIntro />
            <Catalog cars={cars} />
        </Wrapper>
    )
}

export default Page
