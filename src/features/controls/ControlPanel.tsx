import styled from "styled-components";
import Search from "./Search";
import CustomSelect from "./CustomSelect";

const Row = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    margin-bottom: 1.5rem;    

    @media(min-width: 768px)
    {
        flex-direction: row;        
        justify-content: space-between;
        margin-bottom: 2.5rem;
    }
`;

export default function ControlPanel()
{    
    return (
        <Row>
            <Search />
            <CustomSelect />
        </Row>
    );
}