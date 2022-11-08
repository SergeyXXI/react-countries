import { RootState } from "store";
import { ControlsSliceState } from "features/controls/controls-slice";

const selectCountriesInfo = (state: RootState) => (
{
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length
});
    
const selectCountries = (state: RootState) => state.countries.list;
    
const selectSpecifiedCountries = (state: RootState, { searchStr, region }: ControlsSliceState ) =>
{
    return state.countries.list.filter(country =>        
            country.name.common.toLowerCase().includes(searchStr.toLowerCase()) &&
            country.region.toLowerCase().includes(region.toLowerCase())        
    );   
};  

export { selectCountriesInfo, selectCountries,selectSpecifiedCountries }; 