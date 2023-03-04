import { Wrapper, GameHeader, NavButton } from 'views/GameSection.styles'
import ProgressBar from 'containers/ProgressBar/ProgressBar'
import QuizSection from 'containers/QuizSection/QuizSection'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { selectGameState } from 'features/game/gameSlice'
import { useAppNavigate } from 'hooks/useAppNavigate'
import { NavLink } from 'react-router-dom'

const GameSection = () => {
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
      <QuizSection />
      <ProgressBar />
    </Wrapper>
  )
}

export default GameSection