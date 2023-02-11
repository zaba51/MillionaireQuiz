import { decode } from 'html-entities';
import { Wrapper } from './Answear.styles';

const Answear = ( { text = "", onClick, state }: any) => (
    <Wrapper state={state} onClick={onClick}>
        <span style={{zIndex:3}}>{decode(text)}</span>
    </Wrapper>
)

export default Answear