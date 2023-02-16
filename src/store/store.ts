import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import QuizSlice from 'features/currentQuestion/QuizSlice';
import questionsSlice from 'features/questions/AppSlice';
import gameSlice from 'features/game/gameSlice';
import lifelinesSlice from 'features/lifelines/lifelinesSlice';

export const store = configureStore({
  reducer: {
    questions: questionsSlice,
    currentQuestion: QuizSlice,
    game: gameSlice,
    lifelines: lifelinesSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

