import { FC, useEffect, useState, useMemo, useContext } from 'react'
import axios from 'axios'
import { Wrapper, QuizContainer } from 'components/Quiz/Quiz.styles'
import { decode } from 'html-entities';
import { RootState } from 'store/store';
import { fetchQuestionsThunk, selectQuestions } from 'features/questions/AppSlice'
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectCurrentQuestion } from './QuizSlice';
import { increment } from './QuizSlice';
import Answear from 'components/Answear/Answear';
import QuestionHeader from 'components/QuestionHeader/QuestionHeader';
import { freezeClickEvents } from 'helpers/freezeClickEvents';
import { FreezeContext, useFreeze } from 'hooks/useFreeze'
import { delay } from 'helpers/delay';
import { gameOver, setGuarrantedWin } from 'features/game/gameSlice';
import {prizes} from 'containers/ProgressBar/ProgressBar'

export type Tquestions = {
    category: string
    type: string
    difficulty: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
}

const initialButtonState = [
    {
        id: 0,
        label: "A",
        state: "IDLE"
    },
    {
        id: 1,
        label: "B",
        state: "IDLE"
    },
    {
        id: 2,
        label: "C",
        state: "IDLE"
    },
    {
        id: 3,
        label: "D",
        state: "IDLE"
    }
]

const Quiz: FC = () => {
    const questions = useAppSelector(selectQuestions)
    const currentQuestion = useAppSelector(selectCurrentQuestion)
    const dispatch = useAppDispatch()
    const [buttons, setButtons] = useState(initialButtonState)
    const { shouldFreeze, toggleFreeze } = useFreeze();

    // useEffect(() => {
    //     if (!questions[1]) dispatch(fetchQuestionsThunk("https://opentdb.com/api.php?amount=12&type=multiple"))
    // }, [])

    useEffect(() => {
        setButtons(initialButtonState)
        toggleFreeze(false)

        if (currentQuestion == 8 || currentQuestion == 1) {
            dispatch(setGuarrantedWin(prizes[prizes.length-currentQuestion].value))
        }
    }, [currentQuestion, questions])

    const answears = useMemo(() => {
        if (!questions[1]) return [];

        return [
            ...questions[currentQuestion].incorrect_answers,
            questions[currentQuestion].correct_answer
        ].sort(() => Math.random() - 0.5)

    }, [currentQuestion, questions]);


    const checkAnswear = (answear: string): boolean => {
        if (answear === questions[currentQuestion].correct_answer) return true
        return false
    }

    const findCorrectIndex = (): number => {
        return answears.indexOf(
            answears.find((answear) => checkAnswear(answear)) || ""
        )
    }

    const handleCorrect = async (index: number): Promise<void> => {
        if (currentQuestion === questions.length - 1) {
            //TODO handleWin
            alert("Win")
            return
        }
        dispatch(increment())

    }

    const toggleButton = (index: number, state: string) => {
        setButtons(prevState => {
            return prevState.map(button => {
                if (button.id === index) {
                    return {
                        ...button,
                        state: state
                    }
                }
                else return button
            })
        })
    }

    const onClickHandler = async (index: number) => {
        if (!questions[1]) return;

        toggleFreeze(true)

        toggleButton(index, "CLICKED")

        await delay(3000)

        const correctAnswearIndex = findCorrectIndex();
        toggleButton(correctAnswearIndex, "CORRECT")

        await delay(5000)

        if (checkAnswear(answears[index]) === true) {
            handleCorrect(index);
        }
        else {
            dispatch(gameOver())
        }
    }

    console.log(questions[currentQuestion])

    return (
        <QuizContainer>
            <Wrapper shouldFreeze={shouldFreeze}>
                <QuestionHeader text={questions[currentQuestion]?.question} />
                {
                    buttons.map((button, index) => (
                        <Answear
                            key={`${button.id}-${button.state}`}
                            text={answears[index]}
                            onClick={() => onClickHandler(index)}
                            state={button.state}
                        />
                    ))
                }
            </Wrapper>
        </QuizContainer>
    )
}

export default Quiz