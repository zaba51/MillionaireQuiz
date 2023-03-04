import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: #032495;
    border-left: 10px solid cyan;
    grid-row: 1 / 3;
    grid-column: 2/3;
`

export const PrizesWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    height:100%;
    font-size:20px;

    @media (max-width: 800px) {
        font-size:15px;
    }
`