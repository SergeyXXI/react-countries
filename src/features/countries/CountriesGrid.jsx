import styled from "styled-components";
import { useCountries } from "./useCountries";
import Card from "./Card";

const Grid = styled.div`
    display: grid;    
    grid-template-columns: repeat(auto-fit, minmax(260px, .7fr));
    justify-content: center;
    justify-items: center;
    gap: 3rem;

    @media (min-width: 768px)
    {
        gap: 4.5rem;
    }
`; 

export default function CountriesGrid()
{ 
    const { countries, status, error } = useCountries();

    return (
        <Grid>   
            { status === "rejected" && `Error: ${error}. Please, reload page`}         
            { status === "loading" && "Loading..."}
            { 
                status === "received" &&
                (
                    countries?.length ?
                    countries.map(item => <Card key={item.name.official} {...item} />) :
                    "Countries not found."
                )
            }            
        </Grid>
    );
}