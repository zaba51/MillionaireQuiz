import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    width:100%;
    grid-row: 3 / 4;
    grid-column: 1 / 2;

    @media screen and ( max-width: 800px){
        grid-row: 3 / 4;
        grid-column: 1 / 3;
    }
`