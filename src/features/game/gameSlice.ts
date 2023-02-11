import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";

type TinitialState = {
    gameState: "MENU" | "RUNNING" | "ENDED"
    guaranteedWin: string
} 

const initialState: TinitialState = {
    gameState: "MENU",
    guaranteedWin: "0"
} 

export const game = createSlice({
    name: 'game',
    initialState,
    reducers: {
        startMenu: (state) => {
            state.gameState = "MENU"
        },
        startGame: (state) => {
            state.gameState = "RUNNING"
        },
        gameOver: (state) => {
            state.gameState = "ENDED"
        },
        setGuarrantedWin: (state, action) => {
            state.guaranteedWin = action.payload
        }
    }
});

export const { startMenu, startGame, gameOver, setGuarrantedWin } = game.actions

export const selectGameState = (state:RootState) => state.game.gameState
export const selectGuaranteedWin = (state:RootState) => state.game.guaranteedWin

export default game.reducer
