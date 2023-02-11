import { StyledButton, StyledTitle } from 'components/GameOver/GameOver.styles'
import React from 'react'
import { MenuWrapper, Wrapper } from './MenuSection.styles'
import { useAppNavigate } from 'hooks/useAppNavigate'

const MenuSection = () => {
    const {startNewGame} = useAppNavigate();

    return (
        <Wrapper>
            <MenuWrapper>
                <StyledTitle>WHO WANTS TO BE A MILLIONARE</StyledTitle>
                <StyledButton onClick={startNewGame}>NEW GAME</StyledButton>
                <StyledButton>INFO</StyledButton>
            </MenuWrapper>
        </Wrapper>
    )
}

export default MenuSection
