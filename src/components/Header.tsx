import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearControls } from "features/controls/controls-slice";
import ThemeSwitcher from "features/theme/ThemeSwitcher";

const HeaderEl = styled.header`
    background: var(--color-ui);
    padding: 1rem 0;
    box-shadow: var(--shadow);  
    margin-bottom: 1.5rem;

    @media(min-width: 768px)
    {
        margin-bottom: 2.5rem; 
    }
`;

const HeaderContent = styled.div`
    display: flex;    
    max-width: 1440px;
    justify-content: space-between;
    padding: 0 1rem;
    margin: 0 auto;
`;

const HeaderLink = styled(Link).attrs({ to: "/" })`
    font-size: 1.2rem;
    font-weight: 800;
    text-decoration: none;
    color: var(--color-text);
`;

export default function Header()
{
    const dispatch = useDispatch();    

    const onHeaderLinkClick = () => dispatch(clearControls());       

    return (
        <HeaderEl>
            <HeaderContent>
                <HeaderLink onClick={onHeaderLinkClick}>Where in the world?</HeaderLink>
                <ThemeSwitcher />             
            </HeaderContent>
        </HeaderEl>
    );
}