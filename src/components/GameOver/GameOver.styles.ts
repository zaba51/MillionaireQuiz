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

export const StyledTitle = styled.h1`
    font-size: 50px;
    color:white;
    text-align: center;

    @media screen and (max-width:600px) {
      font-size:${({theme}) => theme.fontSize.xl};
    }
`

export const StyledLabel = styled.p`
  margin:0;
`

export const StyledPrize = styled.h3`
  margin:20px;
  font-size:40px;
  color:${({theme}) => theme.colors.orange};
`