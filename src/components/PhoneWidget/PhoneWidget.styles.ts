import styled, {keyframes, css} from "styled-components";

const slideAnimation = keyframes`
  from {
    transform: translateX(-200%);
  }
  to {
    transform: translateX(10%);
  }
`;

const animation = () => css`
    animation: ${slideAnimation} 1.5s ease-in-out 1 forwards, ${slideAnimation} 1.5s 8s ease-in-out 1 reverse forwards
`

export const Wrapper = styled.div<{triggerAnimate?:boolean}>`
    width:350px;
    height:100px;
    background: radial-gradient(closest-side at center,#0e34aa,#032495,#0a216b);
    position: absolute;
    color:white;
    font-size: 15px;
    padding:15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: 40px;
    border: 2px solid cyan;
    ${animation}
`

export const FriendIcon = styled.div`
  min-width:50px;
  min-height: 50px;
  border-radius:50%;
  background-color: cyan;
  color:#0e34aa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  align-self: center;
  margin-right: 15px;
`
