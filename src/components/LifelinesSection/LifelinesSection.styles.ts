import styled, {css} from "styled-components";
import { Wrapper as ProgressBarWrapper } from "containers/ProgressBar/ProgressBar.styles";

export const Wrapper = styled(ProgressBarWrapper)<{shouldFreeze:Boolean}>`
    grid-column: -1 / 2;
    flex-direction: row;
    justify-content: space-evenly;
    pointer-events: ${({shouldFreeze}) => shouldFreeze ? 'none' : 'auto'};

`

export const Lifeline = styled.button<{state?:string}>`
    width:50px;
    height:35px;
    border-radius: 50%;
    border: 2px solid cyan;
    background: radial-gradient(closest-side at center,#0e34aa,#032495,#00000060);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    position:relative;
    font-size:25px;
    
    span {
        font-size:16px
    }

    ${({state}) => state === "USED" && css`
        &::before,
        &::after {
            content: '';
            position:absolute;
            width:105%;
            height:5px;
            transform: rotate(35deg);
            background-color: red;
            border: 1px solid black
        }
        &::after {
            transform: rotate(-35deg);
        }
    `}

`