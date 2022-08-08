import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
    width: 100%;
    max-width: 304px;
    background: var(--color-ui);        
    border-radius: var(--b-radius);
    box-shadow: var(--shadow);    
`;

const CountryLink = styled(Link).attrs(props => (
{
    to: `countries/${props.title}`
}))`
    display: block;
    height: 170px;    
`;

const FlagImg = styled.img.attrs(props => (
{
    src: props.src,
    alt: props.alt
}))`
    width: 100%;   
    height: 100%;  
    border-radius: var(--b-radius) var(--b-radius) 0 0;        
`;

const CountryInfo = styled.div`
    padding: 2rem 1.5rem;
`;

const CountryTitle = styled.h3`
    font-size: 1rem;
    font-weight: 800;
    margin: 0 0 1.5rem 0;
`;

const CountryDataPart = styled.p`    
    margin-top: 0;  
    margin-bottom: ${({ marB }) => marB || "0"}; 
`;

export default function Card(props)
{
    const capital = props.capital[0];    
    const 
    {
        flags: { png: imgSrc },
        name: { common: title },
        population,
        region
    } = props;     

    return(
        <CardContainer>
            <CountryLink title={title}>
                <FlagImg src={imgSrc} alt={title} />
            </CountryLink>            
            <CountryInfo>
                <CountryTitle>{title}</CountryTitle>
                <CountryDataPart marB=".5rem">
                    <span style={{ fontWeight: 600 }}
                    >Population:</span> {population.toLocaleString("en-US")}
                </CountryDataPart>
                <CountryDataPart marB=".5rem">
                    <span style={{ fontWeight: 600 }}
                    >Region:</span> {region}
                </CountryDataPart>
                <CountryDataPart>
                    <span style={{ fontWeight: 600 }}
                    >Capital:</span> {capital || "none"}
                </CountryDataPart>
            </CountryInfo>
        </CardContainer>
    );
}