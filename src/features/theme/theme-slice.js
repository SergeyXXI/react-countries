import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice(
{
    name: "theme",
    initialState: "light",
    reducers:
    {
        setTheme: (state, action) => action.payload
    }
});

const { setTheme } = themeSlice.actions;
const themeReducer = themeSlice.reducer;

export { setTheme, themeReducer };