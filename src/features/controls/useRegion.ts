import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "store";
import { Option } from "./CustomSelect";
import { setRegion } from "./controls-slice";
import { selectRegion } from "./controls-selectors";
import { Region } from "types";

export const useRegion = (): [Region | "", (item: Option | null) => void] =>
{
    const location = useLocation();
    const navigate = useNavigate();
    const regionStr = useSelector(selectRegion);    
    const dispatch = useAppDispatch();  
    
    const handleSelect = (item: Option | null)  =>
    {
        dispatch(setRegion(item?.value ?? ""));        

        if(location.search) navigate("/react-countries");            
    }   

    return [regionStr, handleSelect];
};