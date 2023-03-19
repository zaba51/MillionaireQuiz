import { StyledTitle, } from 'components/GameOver/GameOver.styles'
import { MenuWrapper, Wrapper, StyledMedia, TitleWrapper } from './MenuSection.styles'
import { useAppNavigate } from 'hooks/useAppNavigate'
import { FC } from 'react';
import { StyledButton } from 'components/Button/Button.styles';

const MenuSection: FC = () => {
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
            <StyledMedia>
                <a
                    href="https://github.com/zaba51/MillionareQuiz"
                    target="_blank"
                >
                    Visit the GitHub page
                </a>
            </StyledMedia>
        </Wrapper>
    )
}

export default MenuSection
