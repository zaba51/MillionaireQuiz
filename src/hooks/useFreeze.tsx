import { createContext, useState, useContext, FC } from "react";
import { Tlayout } from "containers/AppProviders/AppProviders";

type TfreezeContext = {
    shouldFreeze: boolean
    toggleFreeze: (state:boolean) => void
}

export const FreezeContext = createContext({
    shouldFreeze: false,
    toggleFreeze: (state:boolean) => {}
})

export const FreezeProvider:FC<Tlayout> = ({children}) => {
    const [shouldFreeze, setShouldFreeze] = useState<boolean>(false)

    const toggleFreeze = (state:boolean):void => {
        setShouldFreeze(state)
    }

    return (
        <FreezeContext.Provider
            value={{
                shouldFreeze,
                toggleFreeze
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