import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sortCountries } from '../../helpers';

const initialState = 
{
    status: "idle", //loading | received | rejected
    list: [],    
    error: null    
};

const loadCountries = createAsyncThunk("countries/loadAll",
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
                    state.error = action.error.message;
                });   
    }        
                
});

const countriesReducer = countriesSlice.reducer;

const selectCountriesInfo = state => (
{
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length
});
    
const selectCountries = state => state.countries.list;
    
const selectSpecifiedCountries = (state, { searchStr, region }) =>
{
    return state.countries.list.filter(country =>        
            country.name.common.toLowerCase().includes(searchStr.toLowerCase()) &&
            country.region.toLowerCase().includes(region.toLowerCase())        
    );   
};    

export { 
    countriesReducer, 
    loadCountries,   
    selectCountriesInfo, selectCountries,selectSpecifiedCountries 
};