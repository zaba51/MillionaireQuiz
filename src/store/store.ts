import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import QuizSlice from 'components/Quiz/QuizSlice';
import questionsSlice from 'features/questions/AppSlice';
import gameSlice from 'features/game/gameSlice';

export const store = configureStore({
  reducer: {
    questions: questionsSlice,
    currentQuestion: QuizSlice,
    game: gameSlice 
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

