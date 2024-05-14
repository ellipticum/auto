import React from 'react'

import Wrapper from '@/shared/UI/layouts/wrapper'

import Intro from '@/widgets/intro/UI'
import CatalogPreview from '@/widgets/catalog-preview/UI'

const Page = () => {
    return (
        <Wrapper>
            <Intro />
            <CatalogPreview />
        </Wrapper>
    )
}

export default Page
