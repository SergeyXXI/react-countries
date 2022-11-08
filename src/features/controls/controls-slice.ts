import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { Region } from 'types';

type ControlsSliceState =
{
    searchStr: string,
    region: Region | ""
};

const initialState: ControlsSliceState =
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
        setSearch: (state, action: PayloadAction<string>) => void(state.searchStr = action.payload),
        setRegion: (state, action: PayloadAction<Region | "">) =>
            void(state.region = action.payload),
            
        clearControls: () => initialState
    }
});

const controlsReducer = controlsSlice.reducer;
const { setSearch, setRegion, clearControls } = controlsSlice.actions;

export { 
    controlsReducer, setSearch, setRegion, clearControls,    
    type ControlsSliceState
};