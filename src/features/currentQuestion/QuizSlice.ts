import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";

type currentQuestionState = {
    value: number
}

const initialState: currentQuestionState = {
    value: 0,
} 

export const currentQuestionSlice = createSlice({
    name: 'currentQuestion',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        resetCurrent: (state) => {
            return initialState;
        }
    }
});

export const { increment, resetCurrent } = currentQuestionSlice.actions

export const selectCurrentQuestion = (state:RootState) => state.currentQuestion.value

export default currentQuestionSlice.reducer
