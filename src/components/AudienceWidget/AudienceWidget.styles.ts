import styled, { keyframes } from "styled-components";
import { Wrapper as PhoneWrapper } from "components/PhoneWidget/PhoneWidget.styles";

const expandAnimation = (percentage: number = 50) => keyframes`
  from {
    transform: scaleY(0%);
  }
  to {
    transform: scaleY(${percentage}%);
  }
`;

export const Wrapper = styled(PhoneWrapper)`
    width:200px;
    height:250px;
    flex-direction: column;
`

export const Bar = styled.div<{percentage:number}>`
    width: 30px;
    height:100%;
    background: linear-gradient(to right, #cbc5b4, #f8faec,#656056 60%, black 70%, #aca785 73%, #3c3831);
    border-top:4px solid #656056;
    transform: scaleY(0%);
    animation: 1.5s 1 2.5s ${({percentage}) => expandAnimation(percentage)} ease-in-out forwards;
    transform-origin: bottom;
`

export const BarWrapper = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-evenly;
  border-bottom:1px solid lightgrey;
  background: repeating-linear-gradient(0deg, transparent, transparent 9%, cyan 9%, transparent 10%)
`
export const LabelsWrapper = styled.div`
  width:100%;
  height:40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`