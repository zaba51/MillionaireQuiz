import styled, { keyframes } from "styled-components";

const slideBottom = () => keyframes`
    from {
        opacity: 0;
        transform: translateY(10%);
    }
    to {
        opacity: 1;
        transform: translateX(0%);
    }
`

export const Wrapper = styled.div`
    color: white;
    font-size: ${({theme}) => theme.fontSize.l};
    line-height: 1.5;
    text-align: justify; 
    padding:20px;
    max-width: 950px;

    @media screen and (max-width: 600px) {
        font-size: 16px;

        h1 {
            font-size: ${({theme}) => theme.fontSize.l};
        }
    }
    
    h1 {
        opacity: 0;
        font-size: ${({theme}) => theme.fontSize.xxl};
        animation: ${slideBottom} 1s 0.2s forwards;
        text-align: center;
    }

    p {
        opacity: 0;
        animation: ${slideBottom} 1.5s 0.4s forwards;
    }
    ul {
        opacity: 0;
        animation: ${slideBottom} 1.5s 0.8s forwards;
    }


`
export const fadeIn = () => keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    min-height: 50%;

    button {
        opacity: 0;
        animation: ${fadeIn} 2s 1s forwards;
    }
`