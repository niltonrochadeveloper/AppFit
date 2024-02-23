// userReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isSign: boolean;
  token: string;
}

const initialState: AuthState = {
  isSign: false,
  token: '',
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setIsSign: (state) => {
      state.isSign = !state.isSign
    },
    setSignOut: () => {
      return initialState
    }
  },
});

export const { setToken, setIsSign, setSignOut } = userSlice.actions;
export default userSlice.reducer;
