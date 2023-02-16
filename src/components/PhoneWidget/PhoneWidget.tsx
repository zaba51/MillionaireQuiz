import { FC, useEffect, useMemo, useState } from "react"
import { Wrapper, FriendIcon } from "components/PhoneWidget/PhoneWidget.styles"
import { faUserTie } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const answearLabels: string[] = ["A", "B", "C", "D"]

type Tprops = {
    correctAnswearIndex: number
}

const PhoneWidget: FC<Tprops> = ({ correctAnswearIndex }) => {
    const [visibleMessage, setVisibleMessage] = useState<string>("")
    const [finished, setFinished] = useState<boolean>(false)
    const [myInterval, setMyInterval] = useState<any>(0)
    const [start, setStart] = useState<boolean>(false)

    const messages: string[] = useMemo(() => [
        "Fortunately I know this one. It's definitely " + answearLabels[correctAnswearIndex] + ".",
        "Oh yes, I've seen this. " + answearLabels[correctAnswearIndex] + " is correct.",
        "I'm not sure about this. Personally I would choose " + answearLabels[Math.floor(Math.random() * answearLabels.length)] + ".",
        "A blind guess: " + answearLabels[Math.floor(Math.random() * answearLabels.length)] + ".",
        "Sorry, I have no idea which one to choose. Good luck."
    ], []);

    const friendsAnswear = useMemo(() => {
        if (correctAnswearIndex === -1 ) return messages[messages.length-1]
        return messages[Math.floor(Math.random() * messages.length)]
    }, [messages])

    useEffect(() => {
        if (visibleMessage.length === friendsAnswear.length) clearInterval(myInterval)
    }, [visibleMessage, friendsAnswear, myInterval])

    useEffect(() => {
        if (!start) return

        let index=0;
        setMyInterval(setInterval(() => {
            let char = friendsAnswear.charAt(index) ? friendsAnswear.charAt(index) : " "
            console.log("Interval")
            setVisibleMessage(prev => prev += char);
            index++;
        }, 50))
    }, [start, friendsAnswear])

    useEffect(() => {
        setTimeout(() => setStart(true), 2000)
    },[])


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