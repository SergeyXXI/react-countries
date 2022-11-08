import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5"; 
import { useSearch } from "./useSearch";

const SearchField = styled.label`
    display: flex;    
    box-sizing: border-box;
    max-width: 400px;
    align-items: center;
    background: var(--color-ui);
    cursor: pointer;
    padding: 1rem 1.5rem;
    border-radius: var(--b-radius);  
    box-shadow: var(--shadow);  

    @media(min-width: 768px)
    {
        flex-basis: 400px;
    }
`;

const SearchInput = styled.input`
    flex-grow: 1;
    position: relative;
    background: var(--color-ui);
    color: var(--color-text);
    border: none;
    outline: none;

    ::placeholder
    {
        color: var(--color-placeholder);
        font-size: .8rem;
    }
    ::-webkit-search-cancel-button
    {
        appearance: none;                 
        display: block;                    
        width: .6rem;
        height: .6rem;                    
        background: var(--search-cancel-btn-gradient);
        cursor: pointer;        
    }    
`;

export default function Search()
{     
    const [value, handleInput] = useSearch();

    return (
        <SearchField>
            <IoSearchOutline className="search-icon" />
            <SearchInput type="search" placeholder="Search for a country..."
                onChange={handleInput} value={value} />
        </SearchField>
    );
}