import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: #032495;
    border-left: 10px solid ${({theme}) => theme.colors.cyan};
    grid-row: 2 / -1;
    grid-column: 2/3;

    @media screen and (max-width: 800px) {
        border: none;
        border-bottom: 5px solid ${({theme}) => theme.colors.cyan};
        border-top: 5px solid ${({theme}) => theme.colors.cyan};
        grid-row: 2 / 2;
        grid-column: 1 / 3;
        width: 100%;
        min-height: 100%;
    }
`

export const PrizesWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    height:100%;
    font-size:${({theme}) => theme.fontSize.l};
    justify-content: space-evenly;
    max-height: 800px;
    padding:15px 0;
    
    @media (max-width: 800px) {
        font-size:${({theme}) => theme.fontSize.m};
        flex-wrap: wrap-reverse;
        align-content: space-around;
        row-gap: 20px;
    }
`