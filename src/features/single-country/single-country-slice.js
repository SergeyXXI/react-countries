import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = 
{
    status: "idle", //loading | received | rejected
    current: null,
    nearby: [],    
    error: null    
};

const loadCountryByName = createAsyncThunk("single-country/loadSinglECountry",
    async (name, { extra: { client, api } }) =>
    {
        const { data } = await client.get(api.searchByName(name));
        
        return data[0];       
    }
);
const loadNearbyCountries = createAsyncThunk("single-country/loadNearby",
    async (borders, { extra: { client, api } }) =>
    {
        const { data } = await client.get(api.searchByCode(borders));
        
        return data.map(item => item.name.common);       
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
                    state.error = action.error.message;
                })
            .addCase(loadNearbyCountries.fulfilled, (state, action) =>            
                {
                    state.status = "received";
                    state.nearby = action.payload;
                });   
    }        
                
});

const singleCountryReducer = singleCountrySlice.reducer; 
const { clearSingle } = singleCountrySlice.actions;  

const selectSingleCountry = state => (
{
    country: state.singleCountry.current,
    nearby: state.singleCountry.nearby,
    status: state.singleCountry.status,
    error: state.singleCountry.error    
});   

export { 
    singleCountryReducer, 
    loadCountryByName, loadNearbyCountries,
    clearSingle,   
    selectSingleCountry 
};