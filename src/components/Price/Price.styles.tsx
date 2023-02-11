import styled from 'styled-components'

export const Wrapper = styled.div<{isCurrent:boolean}>`
    margin-bottom: 5%;
    width: 80%;
    border-radius: 10px;
    padding:10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({theme, isCurrent}) => isCurrent ? 'black' : theme.colors.orange};
    background-color: ${({theme, isCurrent}) => isCurrent ? theme.colors.orange : '#3d71ff33'};
    font-weight: 700;   
    font-size:20px;

    &:first-child, :nth-child(12), :nth-child(5) {
        color: ${({theme, isCurrent}) => isCurrent ? 'black' : "white"};
    }
`