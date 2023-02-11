import { FC } from 'react'
import { Wrapper } from 'components/Price/Price.styles'
import { Tprice } from 'containers/ProgressBar/ProgressBar'
import {currency} from 'global'

type TcurrentPrice = Tprice & {
    isCurrent: boolean
}

const Price:FC<TcurrentPrice> =({id, value, isCurrent}) => {
    return (
        <Wrapper isCurrent={isCurrent}>
            <div>{id}</div>
            <div>{value} {currency}</div>
        </Wrapper>
    )
}


export default Price