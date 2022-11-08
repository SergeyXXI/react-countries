import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { selectSingleCountry } from "./single-country-selectors";
import { loadNearbyCountries } from "./single-country-slice";

export const useNearby = (borders: string[] | undefined) =>
{
    const dispatch = useAppDispatch(); 
    const { nearby } = useSelector(selectSingleCountry);    

     useEffect(() =>
    {
        if(borders?.length)
            dispatch(loadNearbyCountries(borders));
    }, [borders]);

    return nearby;
}