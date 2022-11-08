import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Theme = "light" | "dark";

const themeSlice = createSlice(
{
    name: "theme",
    initialState: "light" as Theme,
    reducers:
    {
        setTheme: (state, action: PayloadAction<Theme>) => action.payload
    }
});

const { setTheme } = themeSlice.actions;
const themeReducer = themeSlice.reducer;

export { setTheme, themeReducer };
export { type Theme };