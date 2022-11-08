const BASE_URL = "https://restcountries.com/v3.1/";

const countriesData = BASE_URL + "all?fields=name,capital,flags,population,region";
const searchByName = (name: string) => BASE_URL + "name/" + name.toLowerCase() + "?fullText=true"; 
const searchByCode = (codes: string[]) => BASE_URL + "alpha?codes=" + codes.join(",");

const api =
{
    countriesData, searchByName, searchByCode
};

export { api };