import { createSlice } from "@reduxjs/toolkit";

type Tlifeline = {
    type: string
    state: "AVAILABLE" | "USED"
}

const initialState: Tlifeline[] = [
    {
        type: "FiftyFifty",
        state: "AVAILABLE"
    },
    {
        type: "PhoneFriend",
        state: "AVAILABLE"
    },
    {
        type: "AskAudience",
        state: "AVAILABLE"
    }
]

const lifelines = createSlice({
    name: 'lifelines',
    initialState,
    reducers: {
        takeLifeline: (state, action) => {
            return state.map(lifeline => {
                if (lifeline.type == action.payload)
                    return {
                        ...lifeline,
                        state: "USED"
                    }
                else 
                    return lifeline
            })
        },
        resetLifelines: (state) => {
            return initialState
        }
    }
})


export const { takeLifeline, resetLifelines } = lifelines.actions

export default lifelines.reducer