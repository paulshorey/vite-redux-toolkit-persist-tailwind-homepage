import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      // side-effects
      if (state.darkMode) {
        document.body.classList.remove('dark');
      } else {
        document.body.classList.add('dark');
      }
      // state change
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = uiSlice.actions;

export default uiSlice.reducer;
