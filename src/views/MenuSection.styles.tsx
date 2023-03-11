import styled, { keyframes } from "styled-components";

const fadeIn = () => keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const Wrapper = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`
export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    min-height: 50%;

    button:nth-of-type(1) {
        opacity: 0;
        animation: ${fadeIn} 1.5s 2s forwards;
    }
    button:nth-of-type(2) {
        opacity: 0;
        animation: ${fadeIn} 1.5s 2.5s forwards;
    }
`

export const StyledMedia = styled.div`
    color: white;
    cursor: pointer;
    justify-self: end;
    margin-top:50px;
    font-size:20px;
    transition: all 0.5s ;

    &::before {
        content: '';
        position:absolute;
        bottom:-3px;
        width: 100%;
        height:2px;
        background-color: #FFFFFF;
        transform: scaleX(0%);
        transition: all 0.5s ;
        transform-origin: left;
    }

    &:hover {
        transform: scale(1.1);
        &:before {
            transform: scaleX(100%);
        }
    }

    a {
        all: unset;
        cursor:pointer;
    }

`

export const TitleWrapper = styled.div`
    width:100%;
    background: radial-gradient(closest-side at center,#0e34aa,#032495,#0a216b);
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        opacity: 0;
        animation: ${fadeIn} 1.5s 0.5s forwards;
    }
`