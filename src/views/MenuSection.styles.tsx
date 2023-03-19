import styled, { keyframes } from "styled-components";

export const fadeInWithOpacity = () => keyframes`
    from {
        opacity: 0;
        transform: translateY(20%);
    }
    to {
        opacity: 1;
        transform: translateY(0%);
    }
`

const slideIn = () => keyframes`
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0%);
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
        animation: ${fadeInWithOpacity} 1s 1s backwards;
    }
    button:nth-of-type(2) {
        animation: ${fadeInWithOpacity} 1s 1.5s backwards;
    }
`

export const StyledMedia = styled.div`
    color: white;
    cursor: pointer;
    justify-self: end;
    margin-top:50px;
    font-size:${({theme}) => theme.fontSize.l};
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
    background: ${({theme}) => theme.colors.navyGradient};
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    animation: ${slideIn} 1s forwards;

    h1 {
        opacity: 0;
        animation: ${fadeInWithOpacity} 1.5s 0.5s forwards;
    }
`