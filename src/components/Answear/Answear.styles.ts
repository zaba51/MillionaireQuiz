import styled, { keyframes, css } from "styled-components";
import { theme } from 'assets/styles/theme'

type Tcolors = {
    "IDLE": string
    "CLICKED": string
    "CORRECT": string
}

const colors:Tcolors = {
    "IDLE": theme.colors.navyGradient,
    "CLICKED" : theme.colors.orange,
    "CORRECT" : "green"
}

const flashGreen = (state: string) => keyframes`
    0%{
        background: ${colors[state as keyof Tcolors]};
    }
    49%{
        background: ${colors[state as keyof Tcolors]};
    }
    50%{
        background: green;
    }
    100% {
        background: green;
    }
`

const flashGreenBefore = () => keyframes`
    0%{
        opacity: 0;
    }
    49%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
`

const animation = (state: string) => css`
    animation: ${flashGreen(state)} 1s 3 normal forwards
`
const flashAnimation = () => css`
    animation: ${flashGreenBefore} 1s 3 normal forwards
`

export const Wrapper = styled.div<{state?:string}>`
    background: ${({theme, state}) => state === "CLICKED"? theme.colors.orange : theme.colors.navyGradient};
    color: white;
    font-weight: 700;
    border: 2px solid lightgrey;
    border-radius: 40px;
    width:100%;
    justify-self: center;
    margin:10px;
    display: flex;
    align-items: center;
    padding:20px;
    cursor:pointer;
    ${({state})=>state==="HIDDEN" ? 'visibility:hidden' : null };
    position: relative;
    z-index: 1;

    &::before {
        content:'';
        position:absolute;
        background-color: green;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        vertical-align: middle;
        left:0;
        opacity:0;
        ${({state})=>state==="CORRECT" ? flashAnimation : null };
        z-index:2;
    }

    @media screen and (max-width: 350px) {
        padding: 10px;
    }
`

export const Label = styled.span`
    color: ${({theme}) => theme.colors.orange};
    margin-right: 10px;
    z-index: 3;
`