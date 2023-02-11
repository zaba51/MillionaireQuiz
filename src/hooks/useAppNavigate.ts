import { useAppDispatch } from 'store/hooks'
import { setGuarrantedWin, startGame } from 'features/game/gameSlice';
import { resetCurrent } from 'components/Quiz/QuizSlice';
import { fetchQuestionsThunk} from 'features/questions/AppSlice'
import { questionsURL } from 'global';
import { useNavigate } from 'react-router-dom';

export const useAppNavigate = () => {
    let navigate = useNavigate();
    const dispatch = useAppDispatch();

    const startNewGame = () => {
        dispatch(fetchQuestionsThunk(questionsURL))
        dispatch(resetCurrent())
        dispatch(setGuarrantedWin("0"))
        dispatch(startGame())
        navigate('/game')
    }

    const navigateMenu = () => {
        navigate('/menu')
    }

    return {
        startNewGame,
        navigateMenu
    }
}