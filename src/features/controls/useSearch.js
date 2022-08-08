import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchStr, setSearch } from "./controls-slice";
import throttle from "lodash.throttle";

export const useSearch = () =>
{
    const initValue = useSelector(selectSearchStr);
    const [value, setLocalValue] = useState(initValue);
    const dispatch = useDispatch();  

    const setThrottledSearch = useCallback(
        throttle(val => dispatch(setSearch(val)), 300),        
    []);

    const handleInput = e =>
    {
        setLocalValue(e.target.value);
        setThrottledSearch(e.target.value);
    }; 

    return [value, handleInput];
}