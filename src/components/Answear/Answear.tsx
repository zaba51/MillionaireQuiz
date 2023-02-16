import { FC } from 'react';
import { decode } from 'html-entities';
import { Wrapper, Label } from './Answear.styles';

type Tprops = {
    label:string
    text: string
    onClick: () => void
    state: string
}

const Answear: FC<Tprops> = ( {label, text = "", onClick, state="IDLE" }) => (
    <Wrapper state={state} onClick={onClick}>
        <Label>{label+":"}</Label>
        <span style={{zIndex:3}}>{decode(text)}</span>
    </Wrapper>
)

export default Answear