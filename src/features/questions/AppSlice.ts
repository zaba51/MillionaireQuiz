import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { fetchQuestions } from 'features/questions/fetchQuestions';


type Tdifficulties = {
  EASY: string,
  MEDIUM: string
  HARD: string
}

export const difficulties: Tdifficulties = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard"
}

export type Tquestion = {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

const sortByDifficulty = ((curr: Tquestion, next: Tquestion): number => {
  if (curr.difficulty === next.difficulty)
    return 0
  else if (curr.difficulty === difficulties.HARD)
    return 1
  else if (next.difficulty === difficulties.EASY)
    return 1

  return -1
})

const initialQuestionsState: Tquestion[] = [
  {
    category: "",
    type: "",
    difficulty: "",
    question: "",
    correct_answer: "",
    incorrect_answers: ["", "", ""]
  }
]

export const fetchQuestionsThunk = createAsyncThunk(
  'questions/fetchQuestiosns',
  async (url: string) => {
    const response = await fetchQuestions(url);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: initialQuestionsState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionsThunk.pending, (state) => {
        return initialQuestionsState;
      })
      .addCase(fetchQuestionsThunk.fulfilled, (state, action) => {
        return [...action.payload].sort(sortByDifficulty)
      })
  },
});

export const selectQuestions = (state: RootState) => state.questions;

export default questionsSlice.reducer;