import { StyledButton, StyledTitle, } from 'components/GameOver/GameOver.styles'
import { MenuWrapper, Wrapper, StyledMedia, TitleWrapper } from './MenuSection.styles'
import { useAppNavigate } from 'hooks/useAppNavigate'

const MenuSection = () => {
    const { startNewGame, navigateInfo } = useAppNavigate();

    return (
        <Wrapper>
                <TitleWrapper>
                    <StyledTitle>WHO WANTS TO BE A MILLIONAIRE</StyledTitle>
                </TitleWrapper>
            <MenuWrapper>
                <StyledButton onClick={startNewGame}>PLAY</StyledButton>
                <StyledButton onClick={navigateInfo}>INFO</StyledButton>
            </MenuWrapper>
            {/* <footer style={{
                background: "radial-gradient(closest-side at center,#0e34aa,#032495,#0a216b)",
                width:"100%",
                display:"flex",
                alignItems: "center",
                justifyContent: "center",
                height: "20%"
             }}> */}
            <StyledMedia>
                <a
                    href="https://github.com/zaba51/MillionareQuiz"
                    target="_blank"
                >
                    Visit the GitHub page
                </a>
            </StyledMedia>
            {/* </footer> */}
        </Wrapper>
    )
}

export default MenuSection
