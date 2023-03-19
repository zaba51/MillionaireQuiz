import { FC } from 'react'
import { StyledTitle, Wrapper, StyledLabel, StyledPrize } from 'components/GameOver/GameOver.styles'
import { StyledButton } from 'components/Button/Button.styles';
import { currency } from 'global';

type TGameOver = {
    title: string
    guaranteedWin: string
    startNewGame: () => void
    navigateMenu: () => void
}

const GameOver: FC<TGameOver> = ({title, guaranteedWin, startNewGame, navigateMenu}) => {

    return (
    <Wrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledLabel>You won:</StyledLabel>
        <StyledPrize>{guaranteedWin} {currency}</StyledPrize>
        <StyledButton onClick={startNewGame}>PLAY AGAIN</StyledButton>
        <StyledButton onClick={navigateMenu}>GO TO MENU</StyledButton>
    </Wrapper>
    )
    }


export default GameOver