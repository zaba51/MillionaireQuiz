import { StyledButton } from "components/GameOver/GameOver.styles"
import { useAppNavigate } from "hooks/useAppNavigate"
import { NavLink } from "react-router-dom"
import { Wrapper as MenuSectionWrapper } from "./MenuSection.styles"
import { Wrapper, MenuWrapper } from "./InfoSection.styles"

const InfoSection = () => {
    const { navigateMenu } = useAppNavigate()

    return (
        <MenuSectionWrapper>
            <MenuWrapper>
                <Wrapper>
                    <h2>Welcome to my "Who wants to be a millionare" clone app!</h2>
                    <p>
                        This app was written in <b>TypeScript React </b> and was made to enhance my Redux
                        knowledge.
                        <br />
                        The existing state is not the final product, but it has all the basic functionalities you know from the show.
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