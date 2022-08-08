import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setTheme } from "./theme-slice";

export const useAppTheme = () =>
{    
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const toggleTheme = () =>
        dispatch(setTheme(theme === "light" ? "dark" : "light"));

    useEffect(() =>
    {
        document.body.dataset.theme = theme;
    }, [theme]);

    return [theme, toggleTheme];
}