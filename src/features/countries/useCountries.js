import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { selectControls } from "../controls/controls-slice";
import { 
    loadCountries,
    selectCountriesInfo, selectSpecifiedCountries, selectCountries
} from "./countries-slice";

export const useCountries = () =>
{
    const { searchStr, region } = useSelector(selectControls);     
    const { status, error, qty } = useSelector(selectCountriesInfo);
    const countries = useSelector(state =>
        searchStr || region ?
        selectSpecifiedCountries(state, { searchStr, region }) :
        selectCountries(state)); 
    const dispatch = useDispatch();   

    useEffect(() =>
    {
        if(countries?.length) return;

       dispatch(loadCountries());
    }, []); 

    return { countries, status, error };
};