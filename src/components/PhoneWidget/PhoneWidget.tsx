import { FC, useEffect, useMemo, useState } from "react"
import { Wrapper, FriendIcon } from "components/PhoneWidget/PhoneWidget.styles"
import { faUserTie } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useFreeze } from "hooks/useFreeze"

const answearLabels: string[] = ["A", "B", "C", "D"]

type Tprops = {
    correctAnswearIndex: number
    currentAnswearLabels: string[]
}

const PhoneWidget: FC<Tprops> = ({ correctAnswearIndex, currentAnswearLabels }) => {
    const [visibleMessage, setVisibleMessage] = useState<string>("")
    const [myInterval, setMyInterval] = useState<any>(0)
    const [start, setStart] = useState<boolean>(false)
    const { toggleFreeze } = useFreeze();

    const messages: string[] = useMemo(() => [
        "Fortunately I know this one. It's definitely " + answearLabels[correctAnswearIndex] + ".",
        "Oh yes, I've seen this. " + answearLabels[correctAnswearIndex] + " is correct.",
        "I'm not sure about this. Personally I would choose " + currentAnswearLabels[Math.floor(Math.random() * currentAnswearLabels.length)] + ".",
        "A blind guess: " + currentAnswearLabels[Math.floor(Math.random() * currentAnswearLabels.length)] + ".",
        "Sorry, I have no idea which one to choose. Good luck."
    ], []);


    const friendsAnswear = useMemo(() => {
        if (correctAnswearIndex === -1) return messages[messages.length - 1]
        return messages[Math.floor(Math.random() * messages.length)]
    }, [messages])

    useEffect(() => {
        if (visibleMessage.length === friendsAnswear.length) clearInterval(myInterval)
    }, [visibleMessage, friendsAnswear, myInterval])

    useEffect(() => {
        if (!start) return

        let index = 0;
        setMyInterval(setInterval(() => {
            let char = friendsAnswear.charAt(index) ? friendsAnswear.charAt(index) : " "
            console.log("Interval")
            setVisibleMessage(prev => prev += char);
            index++;
        }, 50))
    }, [start, friendsAnswear])

    useEffect(() => {
        setTimeout(() => setStart(true), 2000)

        toggleFreeze(true, "LIFELINES")

        setTimeout(() => {
            toggleFreeze(false, "LIFELINES")
        }, 8000)

    }, [])


    return (
        <Wrapper>
            <FriendIcon>
                <FontAwesomeIcon icon={faUserTie} />
            </FriendIcon>
            {visibleMessage}
        </Wrapper>
    )
}


export default PhoneWidget