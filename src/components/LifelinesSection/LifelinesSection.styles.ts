import styled, {css} from "styled-components";
import { Wrapper as ProgressBarWrapper } from "containers/ProgressBar/ProgressBar.styles";

export const Wrapper = styled.div<{shouldFreeze:Boolean}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    pointer-events: ${({shouldFreeze}) => shouldFreeze ? 'none' : 'auto'};
    width:100%;
    height: 100%;
    border-left: 10px solid  cyan;

    @media screen and (max-width:800px) {
        border: unset;
    }
`

export const Lifeline = styled.button<{state?:string}>`
    width:50px;
    height:35px;
    border-radius: 50%;
    border: 2px solid cyan;
    background: radial-gradient(closest-side at center,#0e34aa,#032495,#0a216b);
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