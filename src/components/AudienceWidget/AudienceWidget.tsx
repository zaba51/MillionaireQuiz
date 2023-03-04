import { FC, useState, useMemo, useEffect } from "react"
import { Wrapper, Bar, BarWrapper, LabelsWrapper } from "./AudienceWidget.styles"
import { difficulties } from 'features/questions/AppSlice'
import { useFreeze } from "hooks/useFreeze"

type Tprops = {
    correctAnswearIndex: number
    difficulty: string
    answearLabels: string[]
}

const allAnswearLabels: string[] = ["A", "B", "C", "D"]

const AudienceWidget: FC<Tprops> = ({ correctAnswearIndex, difficulty, answearLabels:parentAnswearLabels }) => {
    //intentional State initialisation from parent to prevent mid-animation state change
    const [answearLabels] = useState<string[]>(parentAnswearLabels)
    const {toggleFreeze } = useFreeze();


    useEffect(() => {
        toggleFreeze(true, "LIFELINES")

        setTimeout(() => {
            toggleFreeze(false, "LIFELINES")
        },8000)
    },[])

    const newCorrectAnswearIndex = useMemo(() => {
        return answearLabels.findIndex(label => {
            return label === allAnswearLabels[correctAnswearIndex]
        })
    }, [])

    const correctProbability: number = useMemo(() => {
        switch (difficulty) {
            case difficulties.EASY:
                return 0.7;
            case difficulties.MEDIUM:
                return 0.45;
            case difficulties.HARD:
                return 0.25;
            default:
                return 0.5;
        }
    }, []);

    const calculateAudienceAnswears: number[] = useMemo(() => {
        const answearPercentages: number[] = new Array(answearLabels.length).fill(0);
        console.log(answearPercentages, answearLabels.length)
        for (let i: number = 0; i < 100; i++) {
            if (Math.random() < correctProbability) {
                ++answearPercentages[newCorrectAnswearIndex];
            }
            else {
                let randomIndex = newCorrectAnswearIndex;

                while (randomIndex === newCorrectAnswearIndex) {
                    randomIndex = Math.floor(Math.random() * answearLabels.length)
                }

                ++answearPercentages[randomIndex]
            }
        }

        return answearPercentages
    }, [])


    // useEffect(() => {
    //     if (visibleMessage.length === friendsAnswear.length) clearInterval(myInterval)
    // }, [visibleMessage, friendsAnswear, myInterval])

    // useEffect(() => {
    //     if (!start) return

    //     let index=0;
    //     setMyInterval(setInterval(() => {
    //         let char = friendsAnswear.charAt(index) ? friendsAnswear.charAt(index) : " "
    //         console.log("Interval")
    //         setVisibleMessage(prev => prev += char);
    //         index++;
    //     }, 50))
    // }, [start, friendsAnswear])

    // useEffect(() => {
    //     setTimeout(() => setStart(true), 2000)
    // },[])

    console.log(calculateAudienceAnswears, newCorrectAnswearIndex)

    return (
        <Wrapper>
            <LabelsWrapper>
                {calculateAudienceAnswears.map((percentage, index) => (
                    <span key={answearLabels[index]}>{percentage}%</span>
                ))}
            </LabelsWrapper>
            <BarWrapper>
                {calculateAudienceAnswears.map((percentage, index) => (
                    <Bar key={answearLabels[index]} percentage={percentage} />
                ))}
            </BarWrapper>
            <LabelsWrapper>
                {answearLabels.map(label => (
                    <span key={label}>{label}</span>
                ))}
            </LabelsWrapper>
        </Wrapper>
    )
}


export default AudienceWidget