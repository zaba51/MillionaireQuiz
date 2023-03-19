import { FC } from "react"
import { Wrapper, PrizesWrapper } from 'containers/ProgressBar/ProgressBar.styles'
import Price from 'components/Price/Price'
import { useAppSelector } from "store/hooks"
import { selectCurrentQuestion } from "features/currentQuestion/QuizSlice"

export type Tprice = {
    id: number
    value: string
}

export const prizes: Tprice[] = [
    { id: 12, value: '1 MILLION' },
    { id: 11, value: '500.000' },
    { id: 10, value: '250.000' },
    { id: 9, value: '125.000' },
    { id: 8, value: '64.000' },
    { id: 7, value: '32.000' },
    { id: 6, value: '16.000' },
    { id: 5, value: '8.000' },
    { id: 4, value: '4.000' },
    { id: 3, value: '2.000' },
    { id: 2, value: '1.000' },
    { id: 1, value: '500' }
]

const ProgressBar: FC = () => {
    const currentQuestion = useAppSelector(selectCurrentQuestion)

    return (
        <Wrapper>   
            <PrizesWrapper>
                {prizes.map( (price:Tprice) => (
                    <Price key={price.id} {...price} isCurrent={price.id === currentQuestion + 1} />
                ))}
            </PrizesWrapper>
        </Wrapper>
    )
}


export default ProgressBar
