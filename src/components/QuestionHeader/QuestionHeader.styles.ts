import styled from 'styled-components';
import { Wrapper as AnswearWrapper } from 'components/Answear/Answear.styles';

export const Wrapper = styled(AnswearWrapper)`
    grid-column: 1 / 3;
    width:100%;
    font-size: ${({theme}) => theme.fontSize.xl};
    justify-content: center;
    cursor:auto;
    min-height: 80%;

    @media screen and (max-width:600px){
        font-size:${({theme}) => theme.fontSize.l};
    }
`