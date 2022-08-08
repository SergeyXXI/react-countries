const BASE_URL = "https://restcountries.com/v3.1/";

const countriesData = BASE_URL + "all?fields=name,capital,flags,population,region";
const searchByName = name => BASE_URL + "name/" + name.toLowerCase() + "?fullText=true"; 
const searchByCode = codes => BASE_URL + "alpha?codes=" + codes.join(",");

const api =
{
    countriesData, searchByName, searchByCode
};

export { api };