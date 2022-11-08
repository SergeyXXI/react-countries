import { TCountry } from "types";

function sortCountries(countries: TCountry[])
{ 
    if(!countries) return [];
    
    countries.sort((a, b) =>
    {
        if(a.name.common === "Russia") return -1;
        if(b.name.common === "Russia") return 1;        

        return Math.random() - Math.random();   
        
    });     

    return countries;
}

function getStrByDigit(num: number, digit = 3)
{
    const str = String(num);       

    if(!num || str.length <= 3) return num;   

    let division = str.length % digit || 3;
    let finalStr = "";

    for(let i = 0; i < str.length; i++)
    {
        if(i === division)
        {
            division += digit;
            finalStr += ",";
        }

        finalStr += str[i];        
    }    

    return finalStr;
}

export { sortCountries };