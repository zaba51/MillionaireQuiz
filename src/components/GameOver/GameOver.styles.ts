import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color:white
`

export const StyledTitle = styled.h2`
    font-size: 50px;
    color:white;
`

export const StyledLabel = styled.p`
  margin:0;
`

export const StyledPrize = styled.h3`
  margin:20px;
  font-size:40px;
  color:orange;
`

export const StyledButton = styled.button`
    font-size: 20px;
    width:50%;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    background: radial-gradient(closest-side at center,#0e34aa, #032495, #00000060);
    color: white;
    font-weight: 700;
    border: 2px solid lightgrey;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:20px;
    cursor:pointer;

    &:hover {
      transform: scaleX(1.1); 
      box-shadow: 0px 0px 25px -10px white;

    }
`