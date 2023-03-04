import { useAppDispatch } from 'store/hooks'
import { setGuarrantedWin, startGame } from 'features/game/gameSlice';
import { resetCurrent } from 'features/currentQuestion/QuizSlice';
import { fetchQuestionsThunk} from 'features/questions/AppSlice'
import { questionsURL } from 'global';
import { useNavigate } from 'react-router-dom';
import { resetLifelines } from 'features/lifelines/lifelinesSlice';

export const useAppNavigate = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const startNewGame = () => {
        dispatch(fetchQuestionsThunk(questionsURL))
        dispatch(resetCurrent())
        dispatch(setGuarrantedWin("0"))
        dispatch(resetLifelines())
        dispatch(startGame())
        navigate('/game')
    }

    const navigateMenu = () => {
        navigate('/menu')
        console.log("Switched to Menu")
    }

    const navigateInfo= () => {
        navigate('/info')
    }

    return {
        startNewGame,
        navigateMenu,
        navigateInfo
    }
}