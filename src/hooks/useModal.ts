import { useEffect, useState } from 'react';
import { useAppSelector } from 'store/hooks';
import { selectGameState } from 'features/game/gameSlice';

export const useModal = (initialState: boolean = false) => {
  const gameState = useAppSelector(selectGameState)
  const [isOpen, setModalState] = useState(gameState==="ENDED");

  useEffect(() => {
    setModalState(gameState==="ENDED")
  },[gameState])

  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};