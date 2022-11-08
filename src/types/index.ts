type CountrySpelling = 
{
    official: string,
    common: string
};

type CountryName = 
{
    common: string,
    official: string,
    nativeName: Record<string, CountrySpelling>    
};

type Region = "Europe" | "Africa" | "Asia" | "Americas" | "Oceania";

type Currency = 
{
    name: string,
    symbol: string
};

type TCountry = 
{
    name: CountryName, 
    tld: string[],
    currencies: Record<string, Currency>,
    capital: string[],
    region: Region,
    subregion: string,
    languages: Record<string, string>,
    borders: string[],
    population: number,
    flags:
    {
        png: string,
        svg: string
    }
};

export { type Region, type TCountry };
export * from "./slice";