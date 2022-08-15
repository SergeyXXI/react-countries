import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom"
import { selectRegion, setRegion } from "./controls-slice";

export const useRegion = () =>
{
    const location = useLocation();
    const navigate = useNavigate();
    const regionStr = useSelector(selectRegion);    
    const dispatch = useDispatch();  
    
    const handleSelect = item =>
    {
        dispatch(setRegion(item?.value ?? ""));        

        if(location.search) navigate("/react-countries");            
    }   

    return [regionStr, handleSelect];
}