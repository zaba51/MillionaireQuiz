import { FC } from 'react'
import { Wrapper, Lifeline } from 'components/LifelinesSection/LifelinesSection.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { takeLifeline } from 'features/lifelines/lifelinesSlice'
import { useFreeze } from 'hooks/useFreeze'

const Lifelines: FC = () => {
  const [fiftyState, phoneState, peopleState] = useAppSelector(state => state.lifelines);
  const { shouldLifelinesFreeze } = useFreeze();
  const dispatch = useAppDispatch()

  const handleClick = (state:string) => {
    dispatch(takeLifeline(state))
  }

  return (
    <Wrapper shouldFreeze={shouldLifelinesFreeze}>
        <Lifeline state={phoneState.state} onClick={() => handleClick(phoneState.type)} disabled={phoneState.state==="USED"}>
            <FontAwesomeIcon icon={faPhoneFlip} />
        </Lifeline>
        <Lifeline state={peopleState.state} onClick={() => handleClick(peopleState.type)} disabled={peopleState.state==="USED"}>
            <FontAwesomeIcon icon={faPeopleGroup} />
        </Lifeline>
        <Lifeline state={fiftyState.state} onClick={() => handleClick(fiftyState.type)} disabled={fiftyState.state==="USED"}>
            <span>50:50</span>
        </Lifeline>
    </Wrapper>
  )
}

export default Lifelines