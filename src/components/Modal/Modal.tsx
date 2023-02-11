import { ModalWrapper, Button } from 'components/Modal/Modal.styles';
import { ReactNode, FC } from 'react';

type Tprops = {
    handleClose: () => void
    isOpen: boolean
    children: ReactNode
}

ModalWrapper.setAppElement('#root');

const Modal: FC<Tprops> = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper isOpen={isOpen} onRequestClose={handleClose} 
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