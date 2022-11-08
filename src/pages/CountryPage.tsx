import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import Country from "features/single-country/Country";

const Button = styled.button`
    display: flex;    
    width: 110px;    
    align-items: center;
    background: var(--color-ui);
    color: var(--color-text);
    cursor: pointer;
    padding: .3rem 1.4rem;
    border: none;
    border-radius: .25rem;
    box-shadow: var(--shadow); 
    margin: 2.5rem 0 2rem;

    @media(min-width: 768px)
    {
        margin: 3.5rem 0 2rem;
    }
`;

const Icon = styled(IoIosArrowRoundBack).attrs(
{
    size: "1.4rem"
})`
    margin-right: .3rem;
`;

export default function CountryPage()
{   

    const navigate = useNavigate(); 
    const { name = "" } = useParams();

    return (
        <>
            <Button onClick={() => navigate(-1)}>
                <Icon/>Back
            </Button>
            <Country name={name} />            
        </>        
    );
}