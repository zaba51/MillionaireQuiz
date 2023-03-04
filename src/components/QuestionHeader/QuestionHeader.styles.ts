import styled from 'styled-components';
import { Wrapper as AnswearWrapper } from 'components/Answear/Answear.styles';

export const Wrapper = styled(AnswearWrapper)`
    grid-column: 1 / 3;
    width:100%;
    font-size: 24px;
    justify-content: center;
    cursor:auto;

    @media screen and (max-width:600px){
        font-size:20px;
    }
`