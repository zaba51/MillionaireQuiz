import { StyledButton } from "components/Button/Button.styles"
import { useAppNavigate } from "hooks/useAppNavigate"
import { NavLink } from "react-router-dom"
import { Wrapper as MenuSectionWrapper } from "./MenuSection.styles"
import { Wrapper, MenuWrapper } from "./InfoSection.styles"
import { FC } from "react"

const InfoSection: FC = () => {
    const { navigateMenu } = useAppNavigate()

    return (
        <MenuSectionWrapper>
            <MenuWrapper>
                <Wrapper>
                    <h1>Welcome to my "Who wants to be a millionare" clone app!</h1>
                    <p>
                        This app was written in <b>TypeScript React </b> and was made to learn more about Redux and TypeScript.
                        The existing state is not the final product, but it has all the basic functionalities you know from the show.
                        <br />
                        <br />
                        Here's some of the features worth mentioning:
                    </p>
                    <ul>
                        <li>"Ask the audience" lifeline's result depends on the question's difficulty</li>
                        <li>Questions fetched from the API are sorted by difficulty</li>
                        <li>Lifelines' result depends on the visible answears</li>
                        <li>Guarranted win changes after thresholds</li>
                    </ul>
                </Wrapper>
                <StyledButton onClick={navigateMenu}>
                    BACK TO MENU
                </StyledButton>
            </MenuWrapper>
        </MenuSectionWrapper>
    )
}

export default InfoSection