import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { useNavigate, useLocation } from "react-router-dom"
import { setSearch } from "./controls-slice";
import throttle from "lodash.throttle";
import { selectSearchStr } from "./controls-selectors";

type SearchHook = [string, React.ChangeEventHandler<HTMLInputElement>];

export const useSearch = (): SearchHook =>
{
    const location = useLocation();
    const navigate = useNavigate();
    const initValue = useSelector(selectSearchStr);
    const [value, setLocalValue] = useState(initValue);
    const dispatch = useAppDispatch();  

    const setThrottledSearch = useCallback(
        throttle((val, urlParam) =>
        {
            dispatch(setSearch(val));            
            if(urlParam) navigate("/");
        }, 300),        
    []);

    const handleInput: React.ChangeEventHandler<HTMLInputElement> = e =>
    {
        setLocalValue(e.target.value);
        setThrottledSearch(e.target.value, location.search);
    }; 

    return [value, handleInput];
}