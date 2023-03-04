import { StyledButton, StyledTitle } from 'components/GameOver/GameOver.styles'
import { MenuWrapper, Wrapper, StyledMedia } from './MenuSection.styles'
import { useAppNavigate } from 'hooks/useAppNavigate'

const MenuSection = () => {
    const {startNewGame, navigateInfo} = useAppNavigate();

    return (
        <Wrapper>
            <MenuWrapper>
                <StyledTitle>WHO WANTS TO BE A MILLIONAIRE</StyledTitle>
                <StyledButton onClick={startNewGame}>PLAY</StyledButton>
                <StyledButton onClick={navigateInfo}>INFO</StyledButton>
                <StyledMedia>
                    <a
                    href="https://github.com/zaba51/MillionareQuiz"
                    target="_blank"
                    >
                    Visit the GitHub page
                    </a>
                </StyledMedia>
            </MenuWrapper>
        </Wrapper>
    )
}

export default MenuSection
