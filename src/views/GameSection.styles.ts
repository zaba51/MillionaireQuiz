import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    max-height: 2000px;
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-template-rows: 80px 1fr 1fr;
    max-width: 2500px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 0.25fr 0.75fr;
        grid-template-rows: 80px 1fr 1fr;
    }
`
export const GameHeader = styled.header`
    width: 100%;
    height: 100%;
    padding: 5px;
    grid-column: 1;
    padding-left:5%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 800px) {
        justify-content: center;
    }
`

const flashAnimation = keyframes`
    0% {
        transform: translateX(-100%) rotate(-45deg);
    }
    20% {
        transform: translateX(200%) rotate(-45deg);
    }
    100% {
        transform: translateX(200%) rotate(-45deg);
    }
`

export const NavButton = styled.div`
    width:100px;
    height:60px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid cyan;
    color:cyan;
    font-weight: 700;
    font-size:15px;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position:absolute;
        width:100%;
        height:5px;
        transform: rotate(-45deg);
        background-color: #FFFFFFF9;
        animation: ${flashAnimation} 8s infinite backwards
    }

    @media screen and (max-width: 800px){
        justify-self: center;
        width:50px;
        height: 35px;
        font-size: 14px;
        margin: 0;
    }
`