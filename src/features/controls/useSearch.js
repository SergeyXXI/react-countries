import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom"
import { selectSearchStr, setSearch } from "./controls-slice";
import throttle from "lodash.throttle";

export const useSearch = () =>
{
    const location = useLocation();
    const navigate = useNavigate();
    const initValue = useSelector(selectSearchStr);
    const [value, setLocalValue] = useState(initValue);
    const dispatch = useDispatch();  

    const setThrottledSearch = useCallback(
        throttle((val, urlParam) =>
        {
            dispatch(setSearch(val));            
            if(urlParam) navigate("/react-countries");
        }, 300),        
    []);

    const handleInput = e =>
    {
        setLocalValue(e.target.value);
        setThrottledSearch(e.target.value, location.search);
    }; 

    return [value, handleInput];
}