import { FC, useEffect, useState } from 'react'
import { Wrapper, QuizContainer } from 'components/Quiz/Quiz.styles'
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { increment } from '../../features/currentQuestion/QuizSlice';
import Answear from 'components/Answear/Answear';
import QuestionHeader from 'components/QuestionHeader/QuestionHeader';
import { useFreeze } from 'hooks/useFreeze'
import { delay } from 'helpers/delay';
import { gameOver, setGuarrantedWin } from 'features/game/gameSlice';
import {prizes} from 'containers/ProgressBar/ProgressBar'

const answearLabels: string[] = ["A", "B", "C", "D"]

type TinitialButtonState = {
    id: number
    label: string
    state: "IDLE" | "CLICKED" | "CORRECT" | "HIDDEN"
}

const initialButtonsState = [
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

type Tprops = {
    questionText: string
    answears: string[]
    currentQuestion: number
    correctAnswearIndex: number
    changeAnswearLabels: (indexesToHide: number[]) => void
}

const Quiz: FC<Tprops> = ({questionText, answears, currentQuestion, correctAnswearIndex, changeAnswearLabels}) => {
    const dispatch = useAppDispatch()
    const [buttons, setButtons] = useState(initialButtonsState)
    const { shouldFreeze, toggleFreeze } = useFreeze();
    const [fiftyState, phoneState, peopleState] = useAppSelector(state => state.lifelines)

    // useEffect(() => {
    //     if (!questions[1]) dispatch(fetchQuestionsThunk("https://opentdb.com/api.php?amount=12&type=multiple"))
    // }, [])

    useEffect(() => {
        setButtons(initialButtonsState)
        toggleFreeze(false)

        if (currentQuestion === 8 || currentQuestion === 1) {
            dispatch(setGuarrantedWin(prizes[prizes.length-currentQuestion].value))
        }
    }, [currentQuestion, answears])
    
    useEffect(()=> {
        if (fiftyState.state === "USED") hideFiftyFifty()
    },[fiftyState])

    const handleCorrect = async (index: number): Promise<void> => {
        if (currentQuestion === prizes.length - 1 ) {
            dispatch(setGuarrantedWin(prizes[0].value))
            dispatch(gameOver())
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

    const hideFiftyFifty = () => {
        const indexesWithoutCorrect:number[] =
            buttons
                .filter(({id}) => id !== correctAnswearIndex)
                .map(({id}) => id)

        const [, ...idexesToHide] = indexesWithoutCorrect.sort(() => Math.random() - 0.5)
        idexesToHide.forEach((id) => {
            toggleButton(id, "HIDDEN")
        })

        changeAnswearLabels(idexesToHide)
    }

    const onClickHandler = async (index: number) => {
        if (!questionText) return;

        toggleFreeze(true)

        toggleButton(index, "CLICKED")

        await delay(3000)

        toggleButton(correctAnswearIndex, "CORRECT")

        await delay(5000)

        if (index === correctAnswearIndex) {
            handleCorrect(index);
        }
        else {
            dispatch(gameOver())
        }
    }

    return (
        <QuizContainer>
            <Wrapper shouldFreeze={shouldFreeze}>
                <QuestionHeader text={questionText} />
                {
                    buttons.map((button, index) => (
                        <Answear
                            key={`${button.id}-${button.state}`}
                            text={answears[index]}
                            onClick={() => onClickHandler(index)}
                            state={button.state}
                            label={answearLabels[index]}
                        />
                    ))
                }
            </Wrapper>
        </QuizContainer>
    )
}

export default Quiz