import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useAppDispatch } from "store";
import { selectTheme } from "./theme-selectors";
import { Theme, setTheme } from "./theme-slice";

export const useAppTheme = (): [Theme, () => void] =>
{     
    const dispatch = useAppDispatch();
    const theme = useSelector(selectTheme);   

    const toggleTheme = () =>
        dispatch(setTheme(theme === "light" ? "dark" : "light"));

    useEffect(() =>
    {
        document.body.dataset.theme = theme;
    }, [theme]);

    return [theme, toggleTheme];
}