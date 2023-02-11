import { FC } from 'react'
import Quiz from 'components/Quiz/Quiz'
import { Wrapper } from 'containers/QuizSection/QuizSection.styles'
import Modal from 'components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { selectGameState, startMenu, startGame, gameOver, setGuarrantedWin } from 'features/game/gameSlice'
import { useAppSelector } from 'store/hooks';
import GameOver from 'components/GameOver/GameOver';

const QuizSection: FC = () => {
    const { isOpen, handleOpenModal, handleCloseModal } = useModal();

    console.log(isOpen)
    return (
        <Wrapper>
            <div>Headerrrrrrrrrrrrrrrr</div>
            <Quiz />
            <Modal isOpen={isOpen} handleClose={handleCloseModal}>
                <GameOver />
            </Modal>
        </Wrapper>
    )
}

export default QuizSection