import { RootState } from "store";

export const selectSingleCountry = (state: RootState) => (
{
    country: state.singleCountry.current,
    nearby: state.singleCountry.nearby,
    status: state.singleCountry.status,    
    error: state.singleCountry.error    
});  