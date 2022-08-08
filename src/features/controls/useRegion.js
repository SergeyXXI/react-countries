import { useDispatch, useSelector } from "react-redux";
import { selectRegion, setRegion } from "./controls-slice";

export const useRegion = () =>
{
    const regionStr = useSelector(selectRegion);    
    const dispatch = useDispatch();  
    
    const handleSelect = item => dispatch(setRegion(item?.value ?? ""));   

    return [regionStr, handleSelect];
}