import { createContext, useState, useContext, FC } from "react";
import { Tlayout } from "containers/AppProviders/AppProviders";

type TfreezeContext = {
    shouldFreeze: boolean
    toggleFreeze: (state:boolean, elements?:string) => void
    shouldLifelinesFreeze: boolean
}

export const FreezeContext = createContext({
    shouldFreeze: false,
    toggleFreeze: (state:boolean, elements?:string) => {},
    shouldLifelinesFreeze: false
})

export const FreezeProvider:FC<Tlayout> = ({children}) => {
    const [shouldFreeze, setShouldFreeze] = useState<boolean>(false)
    const [shouldLifelinesFreeze, setShouldLifelinesFreeze] = useState<boolean>(false)

    const toggleFreeze = (state:boolean, elements?:string):void => {
        switch(elements) {
            case "LIFELINES":
                setShouldLifelinesFreeze(state)
                break
            default:
                setShouldFreeze(state)
                setShouldLifelinesFreeze(state)
                break
        }
    }

    return (
        <FreezeContext.Provider
            value={{
                shouldFreeze,
                toggleFreeze,
                shouldLifelinesFreeze
            }}
        >
            {children}
        </FreezeContext.Provider>
    )

}

export const useFreeze = () => {
    const freezeContext = useContext(FreezeContext);
  
    if (!freezeContext) {
      throw Error('useFreeze needs to be used inside FreezeContext');
    }
  
    return freezeContext;
  };