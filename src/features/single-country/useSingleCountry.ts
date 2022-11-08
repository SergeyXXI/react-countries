import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { loadCountryByName, clearSingle } from "./single-country-slice";
import { selectSingleCountry } from "./single-country-selectors";

export const useSingleCountry = (name: string) =>
{
    const dispatch = useAppDispatch(); 
    const { country, status, error } = useSelector(selectSingleCountry);           

    useEffect(() =>
    {         
        dispatch(loadCountryByName(name));       

        return () => void (dispatch(clearSingle()));
        
    }, [name]);  

    return { country, status, error };
}