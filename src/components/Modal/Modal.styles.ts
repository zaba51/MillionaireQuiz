import styled, { keyframes } from "styled-components";
import ReactModal from 'react-modal'

const slideAnimation = keyframes`
  from {
    transform: translateX(-50%) translateY(0%);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) translateY(-50%);
    opacity: 1;
  }
`;
export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  min-height: 500px;
  background:radial-gradient(closest-side at center,#0e34aa, #032495, #0a216b);
  background-color: #0e34aa;
  border-radius: 15px;
  border: 4px solid lightgrey;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  animation: ${slideAnimation} 0.4s ease-in-out 1 forwards;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 700px) {
    width:100%;

    button {
      width:100%;
    }
  }
`