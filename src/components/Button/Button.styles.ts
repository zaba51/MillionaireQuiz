import styled from "styled-components"

export const StyledButton = styled.button`
    font-size: ${({theme}) => theme.fontSize.m};
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    background: ${({theme}) => theme.colors.navyGradient};
    color: white;
    font-weight: 700;
    border: 2px solid lightgrey;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:20px;
    cursor:pointer;
    width: 350px;
    max-width: 350px;

    &:hover {
    transform: scaleX(1.1); 
    box-shadow: 0px 0px 25px -10px white;
    }

    @media screen and (max-width: 700px) {
    width:100%;
}
`