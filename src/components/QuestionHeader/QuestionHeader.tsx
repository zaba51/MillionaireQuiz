import { decode } from 'html-entities';
import { Wrapper } from 'components/QuestionHeader/QuestionHeader.styles';
import { FC } from 'react'

type Ttext = {
    text:string
}

const QuestionHeader: FC<Ttext> = ({ text }) => (
    <Wrapper>
        {decode(text)}
    </Wrapper>
)

export default QuestionHeader