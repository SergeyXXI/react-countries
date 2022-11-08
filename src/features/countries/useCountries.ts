import { RootState, useAppDispatch } from "store";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { selectControls } from "features/controls/controls-selectors";
import { loadCountries } from "./countries-slice";
import { selectCountriesInfo, selectSpecifiedCountries, selectCountries } from "./countries-selectors";

export const useCountries = () =>
{
    const { searchStr, region } = useSelector(selectControls);     
    const { status, error } = useSelector(selectCountriesInfo);
    const countries = useSelector((state: RootState) =>
        searchStr || region ?
        selectSpecifiedCountries(state, { searchStr, region }) :
        selectCountries(state)); 
    const dispatch = useAppDispatch();   

    useEffect(() =>
    {
        if(countries?.length) return;

       dispatch(loadCountries());
    }, []); 

    return { countries, status, error };
};