import { FC, useEffect, useMemo, useState } from 'react'
import Quiz from 'components/Quiz/Quiz'
import { Wrapper } from 'containers/QuizSection/QuizSection.styles'
import Modal from 'components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { selectGameState, startMenu, startGame, gameOver, setGuarrantedWin } from 'features/game/gameSlice'
import { useAppDispatch, useAppSelector } from 'store/hooks';
import GameOver from 'components/GameOver/GameOver';
import { useAppNavigate } from 'hooks/useAppNavigate';
import { selectGuaranteedWin } from 'features/game/gameSlice'
import { prizes } from 'containers/ProgressBar/ProgressBar'
import PhoneWidget from 'components/PhoneWidget/PhoneWidget';
import { selectQuestions } from 'features/questions/AppSlice';
import { selectCurrentQuestion } from 'features/currentQuestion/QuizSlice';

const QuizSection: FC = () => {
    const { isOpen, handleOpenModal, handleCloseModal } = useModal();
    const { startNewGame, navigateMenu } = useAppNavigate();
    const guaranteedWin = useAppSelector(selectGuaranteedWin)
    const [correctAnswearIndex, setCorrectAnswearIndex] = useState<number>(-1)
    const title = (guaranteedWin === prizes[0].value) ? "Congratulations!" : "Game over"
    const questions = useAppSelector(selectQuestions)
    const currentQuestion = useAppSelector(selectCurrentQuestion)
    const [fiftyState, phoneState, peopleState] = useAppSelector(state => state.lifelines)

    const answears = useMemo(() => {
        if (!questions[1]) return [];

        return [
            ...questions[currentQuestion].incorrect_answers,
            questions[currentQuestion].correct_answer
        ].sort(() => Math.random() - 0.5)

    }, [currentQuestion, questions]);

    useEffect(() => {
        setCorrectAnswearIndex(findCorrectIndex())
    },[currentQuestion, questions])

    const checkAnswear = (answear: string): boolean => {
        if (answear === questions[currentQuestion].correct_answer) return true
        return false
    }

    const findCorrectIndex = (): number => {
        return answears.indexOf(
            answears.find((answear) => checkAnswear(answear)) || ""
        )
    }

    console.log(questions[currentQuestion])

    return (
        <Wrapper>
            <div>
                {
                phoneState.state=="USED" ?
                    <PhoneWidget correctAnswearIndex={correctAnswearIndex} />
                    :
                    null
                }
            </div>
            <Quiz
                answears={answears}
                questionText={questions[currentQuestion].question}
                currentQuestion={currentQuestion}
                correctAnswearIndex={correctAnswearIndex}
            />
            <Modal isOpen={isOpen}>
                <GameOver
                    title={title}
                    guaranteedWin={guaranteedWin}
                    startNewGame={startNewGame}
                    navigateMenu={navigateMenu}
                />
            </Modal>
        </Wrapper>
    )
}

export default QuizSection