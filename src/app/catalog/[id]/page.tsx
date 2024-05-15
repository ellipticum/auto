import React from 'react'

import Wrapper from '@/shared/UI/layouts/wrapper'
import Header from '@/shared/UI/header'
import getCar from '@/shared/utils/get-car'
import CarInfo from '@/widgets/car-info/UI'

const Page = async ({ params }: { params: { id: string } }) => {
    const car = await getCar(Number(params.id))

    return (
        <Wrapper>
            <Header />
            <CarInfo car={car} />
        </Wrapper>
    )
}

export default Page
