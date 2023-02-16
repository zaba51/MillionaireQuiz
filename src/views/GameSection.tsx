import { Wrapper } from 'views/GameSection.styles'
import ProgressBar from 'containers/ProgressBar/ProgressBar'
import QuizSection from 'containers/QuizSection/QuizSection'
import Lifelines from 'components/LifelinesSection/LifelinesSection'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { selectGameState } from 'features/game/gameSlice'
import { useAppNavigate } from 'hooks/useAppNavigate'

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
      <Lifelines />
      <QuizSection />
      <ProgressBar />
    </Wrapper>
  )
}

export default GameSection