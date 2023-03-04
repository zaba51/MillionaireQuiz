import styled from 'styled-components'

export const Wrapper = styled.div<{shouldFreeze?:boolean}>`
    width:100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 0.5fr 0.5fr;
    padding:20px;
    pointer-events: ${({shouldFreeze}) => shouldFreeze ? 'none' : 'auto'};
    z-index: 0;
    max-width: 1200px;

`

export const QuizContainer = styled.div`
    background-color: #21419e;
    display: flex;
    width:100%;
    max-height: 100%;
    align-items: center;
    justify-content: center;
`