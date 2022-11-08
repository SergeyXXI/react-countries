import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TCountry } from 'types';
import { Extra, Status } from 'types';
import { sortCountries } from '../../helpers';

type initialStateSlice =
{
    status: Status,
    list: TCountry[],
    error: string | null
};

const initialState: initialStateSlice = 
{
    status: "idle",
    list: [],    
    error: null    
};

const loadCountries = createAsyncThunk<
    TCountry[],
    undefined,
    {
        extra: Extra
    }
>("countries/loadAll",
    async (_, { extra: { client, api } }) =>
    {
        const { data } = await client.get(api.countriesData);
        
        return sortCountries(data);       
    }
);

const countriesSlice = createSlice(
{
    name: "countries",
    initialState,
    reducers: {},
    extraReducers: builder =>
    {
        builder
            .addCase(loadCountries.fulfilled, (state, action) =>            
                {
                    state.status = "received";
                    state.list = action.payload;
                })
            .addCase(loadCountries.pending, state =>            
                {
                    state.status = "loading";
                    state.error = null;
                })
            .addCase(loadCountries.rejected, (state, action) => 
                {                    
                    state.status = "rejected";
                    state.error = action.error.message || "Unknown error :(";
                });   
    }        
                
});

const countriesReducer = countriesSlice.reducer;  

export { countriesReducer, loadCountries };