import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    loadCountryByName, clearSingle,
    selectSingleCountry
} from "./single-country-slice";

export const useSingleCountry = name =>
{
    const dispatch = useDispatch(); 
    const { country, status, error } = useSelector(selectSingleCountry);           

    useEffect(() =>
    {         
        dispatch(loadCountryByName(name));       

        return () => dispatch(clearSingle());
        
    }, [name]);  

    return { country, status, error };
}