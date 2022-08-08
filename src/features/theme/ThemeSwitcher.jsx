import styled from "styled-components";
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { useAppTheme } from "./useAppTheme";

const ThemeMode = styled.div`
    display: flex;
    align-items: center;
    font-size: .9rem;
    font-weight: 600;
    cursor: pointer;
`;

export default function ThemeSwitcher()
{
    const [theme, toggleTheme] = useAppTheme();

    return (
        <ThemeMode onClick={toggleTheme}>                    
        {
            theme === "light" ?                        
            <>
                <IoMoonOutline className="theme-mode-icon" />
                Light Mode
            </>
                :
            <>
                <IoMoon className="theme-mode-icon" />
                Dark Mode
            </>
        }                    
        </ThemeMode>  
    );
}