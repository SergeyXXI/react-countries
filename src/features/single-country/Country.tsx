import { useSingleCountry } from "./useSingleCountry";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useNearby } from "./useNearby";

type CountryProps = 
{
    name: string
};

const Content = styled.div`
    display: flex;
    flex-direction: column;    

    @media(min-width: 425px)
    {        
        align-items: center;
    }
    @media(min-width: 992px)
    {        
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 0 4rem;
    }

`;

const CountryFlag = styled.img.attrs(props => (
{
    src: props.src,
    alt: props.alt
}))`
    width: 100%;
    max-width: 390px; 
    max-height: 260px;   
    margin-bottom: 3.5rem;
    
    @media(min-width: 768px)
    {               
        max-width: 460px; 
        max-height: 320px;        
    }
    @media(min-width: 992px)
    {        
        width: auto;
        flex-basis: 48%;        
        max-width: none;
        max-height: 520px;        
        margin: 0;
    }
`;

const CountryInfo = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 425px)
    {        
        align-items: center;
    }
    @media(min-width: 768px)
    {           
        align-items: flex-start;
        max-width: 580px;         
    }    
    @media(min-width: 992px)
    {    
        width: 50%;   
        max-width: 580px;         
    }
    @media(min-width: 1200px)
    {           
        padding-top: 3rem;
    }
`;

const CountryTitle = styled.h2`   
    font-weight: 800;
    margin: 0 0 2rem;

    @media(min-width: 768px)
    {
        text-align: center;
    }
    @media(min-width: 992px)
    {
        font-size: 1.8rem;
    }
`;

const ListsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    @media(min-width: 576px)
    {
        width: 80%;
        flex-direction: row;
        justify-content: space-between;
        gap: 0 1rem;           
    }
    @media(min-width: 768px)
    {        
        width: 100%;
    }    
    @media(min-width: 1200px)
    {    
        margin-bottom: 4.8rem;
    }
`;

const List = styled.ul`
    list-style: none;
    padding: 0;

    :first-child
    {
        min-width: 120px;
        margin: 0 0 2.4rem;

        @media(min-width: 576px)
        {
            margin: 0;
        }
    }
    :nth-child(2)
    {
        margin: 0;
    }

    @media(min-width: 576px)
    {
        flex-basis: 50%;         
    }
    @media(min-width: 992px)
    {
        flex-basis: auto;         
    }
`;

const ListItem = styled.li`
    margin-bottom: 1.1rem;

    :last-child
    {
        margin-bottom: 0;
    }

    & > b
    {
        font-weight: 600;
    }
`;

const BCContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 1rem;
    gap: 0.8rem;

    @media(min-width: 768px)
    {
        flex-direction: row; 
        align-items: center;            
    }
    @media(min-width: 992px)
    {        
        flex-wrap: wrap;        
        padding: 0;      
    }
`;

const BCTitle = styled.h3`
    flex: 1 0 auto;
    font-weight: 600;  
    margin: 0;  

    @media(min-width: 425px)
    {
        text-align: center;      
    }    
    @media(min-width: 992px)
    {
        text-align: left;
        font-size: 1rem;            
    }
`;

const BCList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: .8rem;
    padding: 0;    
    margin: 0;

    @media(min-width: 425px)
    {
        justify-content: center;
    }
    @media(min-width: 768px)
    {
        justify-content: flex-start;
    }
`;

const BCItem = styled.li`
    width: 110px;
    text-align: center;
    background: var(--color-ui);
    color: var(--color-text);
    cursor: pointer;
    padding: .3rem;
    border-radius: .25rem;
    box-shadow: var(--shadow);    
`;


export default function Country({ name = "" }: CountryProps)
{
    const { country, status, error } = useSingleCountry(name);
    const navigate = useNavigate(); 
    
    const langKeys = Object.keys(country?.languages || {}).reverse();  
    const imgSrc = country?.flags.png;
    const nativeName = country?.name.nativeName[langKeys[0]].common;    
    const population = country?.population.toLocaleString("en-US");
    const region = country?.region;  
    const subregion = country?.subregion;  
    const capital = country?.capital?.[0];
    const tld = country?.tld?.[0];
    const currencies = Object.keys(country?.currencies || {})
        .map(key => country?.currencies[key].name || "no data")
        .join(", ");
    const languages = langKeys.map(key =>
        country?.languages[key] || "no data").join(", ");
    const borders = country?.borders; 

    const nearby = useNearby(borders);     

    return (
        <>
        { status === "rejected" && `Error: ${error}. No such country`}         
        { status === "loading" && "Loading..."}
        { 
            status === "received" && country &&
            <Content>
                <CountryFlag src={imgSrc} alt={name} />
                <CountryInfo>
                    <CountryTitle>{name}</CountryTitle>
                    <ListsContainer>
                        <List>
                            <ListItem>
                                <b>Native Name: </b>
                                {nativeName}
                            </ListItem>
                            <ListItem>
                                <b>Population: </b>
                                {population}
                            </ListItem>
                            <ListItem>
                                <b>Region: </b>
                                {region}
                            </ListItem>
                            <ListItem>
                                <b>Sub Region: </b>
                                {subregion}
                            </ListItem>
                            <ListItem>
                                <b>Capital: </b>
                                {capital || "none"}
                            </ListItem>                                                   
                        </List>
                        <List>
                            <ListItem>
                                <b>Top Level Domain: </b>
                                {tld}
                            </ListItem>
                            <ListItem>
                                <b>Currencies: </b>
                                {currencies}
                            </ListItem>
                            <ListItem>
                                <b>Languages: </b>
                                {languages}
                            </ListItem>                                                    
                        </List>                    
                    </ListsContainer>
                    <BCContainer>
                        <BCTitle>Border Countries:</BCTitle>
                        {
                            nearby.length ?
                                <BCList>
                                {
                                    nearby.map(name =>
                                        <BCItem
                                            onClick={() => navigate(`/${name}`)} 
                                            key={name}
                                        >{name}</BCItem>
                                    )
                                }                                
                                </BCList> : 
                            !borders && "None"
                        }                      
                    </BCContainer>
                </CountryInfo>                
            </Content>
        }         
        </>
    );
}