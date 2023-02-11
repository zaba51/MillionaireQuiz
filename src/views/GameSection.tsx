import { Wrapper } from 'views/GameSection.styles'
import ProgressBar from 'containers/ProgressBar/ProgressBar'
import QuizSection from 'containers/QuizSection/QuizSection'

const GameSection = () => {
  return (
    <Wrapper>
      <header style={{ gridColumn: '1/3' }}>Witam</header>
      <QuizSection />
      <ProgressBar />
    </Wrapper>
  )
}

export default GameSection