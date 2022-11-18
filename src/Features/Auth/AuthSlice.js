import { createSlice } from '@reduxjs/toolkit';

const INITTAL_STATE = {
   auth: null,
};

const AuthSlice = createSlice({
   name: 'auth',
   initialState: INITTAL_STATE,
   reducers: {
      signIn: (state, action) => {
         state.auth = action.payload;
      },
      logOut: (state) => {
         state.auth = null;
      },
   },
});

export const { signIn, logOut } = AuthSlice.actions;
export default AuthSlice;
