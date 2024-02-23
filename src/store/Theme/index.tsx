// userReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  theme: string
}

const initialState: ThemeState = {
  theme: 'light' || 'dark'
};

const userSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = userSlice.actions;
export default userSlice.reducer;
