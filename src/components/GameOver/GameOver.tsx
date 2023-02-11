import { FC } from 'react'
import { StyledTitle, Wrapper, StyledButton, StyledLabel, StyledPrize } from 'components/GameOver/GameOver.styles'
import { useAppNavigate } from 'hooks/useAppNavigate';
import { useAppSelector } from 'store/hooks';
import { selectGuaranteedWin } from 'features/game/gameSlice'
import { currency } from 'global';

const GameOver: FC = () => {
    const {startNewGame, navigateMenu} = useAppNavigate();
    const guaranteedWin = useAppSelector(selectGuaranteedWin)

    return (
    <Wrapper>
        <StyledTitle>Game Over</StyledTitle>
        <StyledLabel>You won:</StyledLabel>
        <StyledPrize>{guaranteedWin} {currency}</StyledPrize>
        <StyledButton onClick={startNewGame}>PLAY AGAIN</StyledButton>
        <StyledButton onClick={navigateMenu}>GO TO MENU</StyledButton>
    </Wrapper>
    )
    }


export default GameOver