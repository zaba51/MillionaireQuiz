import { ModalWrapper, Button } from 'components/Modal/Modal.styles';
import { ReactNode, FC } from 'react';

type Tprops = {
    isOpen: boolean
    children: ReactNode
}

ModalWrapper.setAppElement('#root');

const Modal: FC<Tprops> = ({ isOpen, children }) => {
  return (
    <ModalWrapper isOpen={isOpen} 
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }
      }}
    >
      {children}
    </ModalWrapper>
  );
};

export default Modal