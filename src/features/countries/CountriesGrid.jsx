import styled from "styled-components";
import { useCountries } from "./useCountries";
import { usePagination } from "./usePagination";
import { Navigate } from "react-router-dom";
import Card from "./Card";
import Pagination from "../../components/Pagination";

const Grid = styled.div`
    display: grid;    
    grid-template-columns: repeat(auto-fit, minmax(280px, .7fr));
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
    const { countries: countriesAll, status, error } = useCountries();  
    const { countries, currentPage, pagesNum } = usePagination(countriesAll); 
    
    if(!currentPage || currentPage < 0 ||
        (pagesNum > 1 && currentPage > pagesNum))
            return <Navigate to={"/"} replace={true} />;      

    return (
        <>
            <Grid>   
            { status === "rejected" && `Error: ${error}. Please, reload page`}         
            { status === "loading" && "Loading..."}            
            { 
                status === "received" && countries.length ?                    
                    countries.map(item => <Card key={item.name.official} {...item} />) :
                    status === "received" && "Countries not found."                
            }                  
            </Grid>
            {
                status === "received" && pagesNum > 1 &&
                <Pagination num={pagesNum} current={currentPage} />
            }            
        </>  
    );
}