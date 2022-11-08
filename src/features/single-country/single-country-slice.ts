import { Status, Extra, TCountry } from 'types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type InitialStateSlice = 
{
    status: Status,    
    current: TCountry | null,
    nearby: string[],
    error: string | null
};

const initialState: InitialStateSlice = 
{
    status: "idle",    
    current: null,
    nearby: [],    
    error: null    
};

const loadCountryByName = createAsyncThunk<
    TCountry,
    string,
    {
        extra: Extra
    }
>("single-country/loadSingleCountry",
    async (name, { extra: { client, api } }) =>
    {
        const { data } = await client.get(api.searchByName(name));
        
        return data[0];       
    }
);
const loadNearbyCountries = createAsyncThunk<
    string[],
    string[],
    {
        extra: Extra
    }
>("single-country/loadNearby",
    async (borders, { extra: { client, api } }) =>
    {
        const { data } = await client.get(api.searchByCode(borders));
        
        return data.map((item: TCountry) => item.name.common);       
    }
);

const singleCountrySlice = createSlice(
{
    name: "single-country",
    initialState,
    reducers:
    {
        clearSingle: () => initialState
    },
    extraReducers: builder =>
    {
        builder
            .addCase(loadCountryByName.fulfilled, (state, action) =>            
            {
                state.status = "received";
                state.current = action.payload;
            })
            .addCase(loadCountryByName.pending, state =>            
            {
                state.status = "loading";
                state.error = null;
            })
            .addCase(loadCountryByName.rejected, (state, action) => 
            {                    
                state.status = "rejected";
                state.error = action.error.message || "Unknown error :(";
            })
            .addCase(loadNearbyCountries.fulfilled, (state, action) =>            
            {                
                state.nearby = action.payload;
            });             
    }        
                
});

const singleCountryReducer = singleCountrySlice.reducer; 
const { clearSingle } = singleCountrySlice.actions;  

export { 
    singleCountryReducer, 
    loadCountryByName, loadNearbyCountries,
    clearSingle    
};