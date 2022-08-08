import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNearbyCountries, selectSingleCountry } from "./single-country-slice";

export const useNearby = borders =>
{
    const dispatch = useDispatch(); 
    const { nearby } = useSelector(selectSingleCountry);  

     useEffect(() =>
    {
        if(borders?.length)
            dispatch(loadNearbyCountries(borders));
    }, [borders]);

    return nearby;
}