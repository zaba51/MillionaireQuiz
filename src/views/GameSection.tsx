import { Wrapper, GameHeader, NavButton } from 'views/GameSection.styles'
import ProgressBar from 'containers/ProgressBar/ProgressBar'
import QuizSection from 'containers/QuizSection/QuizSection'
import { useEffect, FC } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { selectGameState } from 'features/game/gameSlice'
import { useAppNavigate } from 'hooks/useAppNavigate'
import { NavLink } from 'react-router-dom'
import Lifelines from 'components/LifelinesSection/LifelinesSection'

const GameSection: FC = () => {
  const gameState = useAppSelector(selectGameState)
  const dispatch = useAppDispatch()
  const {startNewGame} = useAppNavigate()

  useEffect(() => {
    if (gameState === "MENU") {
      startNewGame()
    }
  }, [])

  return (
    <Wrapper>
      <GameHeader>
        <NavButton>
          <NavLink to="/menu" style={{all:"unset", cursor:"pointer"}}>MENU</NavLink>
        </NavButton>
      </GameHeader>
      <Lifelines />
      <QuizSection />
      <ProgressBar />
    </Wrapper>
  )
}

export default GameSection