import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  username: 'fake username lol',
  isLoggedIn: false, //when application starts, defaults to false
};

export const userSlice = createSlice({
  name: 'setUser',
  initialState,
  reducers: {
    changeUserState: (state) => {
      if (state.isLoggedIn) {
        // eslint-disable-next-line no-param-reassign
        state.isLoggedIn = false; // signs out the user
      } else {
        // eslint-disable-next-line no-param-reassign
        state.isLoggedIn = true; // signs the user in
      }
    },
    setUsername: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.username = action.payload;
    },
  },
});

export const { changeUserState, setUsername } = userSlice.actions;

export default userSlice.reducer;
