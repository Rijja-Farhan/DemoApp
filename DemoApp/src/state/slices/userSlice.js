import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: 'user', // Initial role is 'user'
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    switchRole: (state) => {
      // Toggle between 'user' and 'admin'
      state.role = state.role === 'user' ? 'admin' : 'user';
    },
  },
});

export const { switchRole } = userSlice.actions;
export default userSlice.reducer;
