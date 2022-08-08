import { createSlice } from '@reduxjs/toolkit';

const initialState =
{
    searchStr: "",
    region: ""   
};

const controlsSlice = createSlice(
{
    name: "controls",
    initialState,
    reducers:
    {
        setSearch: (state, action) => void(state.searchStr = action.payload),
        setRegion: (state, action) => void(state.region = action.payload),
        clearControls: () => initialState
    }
});

const controlsReducer = controlsSlice.reducer;
const { setSearch, setRegion, clearControls } = controlsSlice.actions;

const selectControls = state => state.controls;
const selectSearchStr = state => state.controls.searchStr;
const selectRegion = state => state.controls.region;

export { 
    controlsReducer,
    setSearch, setRegion, clearControls,
    selectSearchStr, selectControls, selectRegion
};