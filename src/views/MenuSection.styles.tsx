import styled from "styled-components";

export const Wrapper = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const MenuWrapper = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
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