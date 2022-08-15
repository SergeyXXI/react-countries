import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMQ } from "./useMQ";

export const usePagination = countriesAll =>
{
    const PER_PAGE = useMQ();
    const location = useLocation();  
    const currentPage = !location.search ? 1 :
                            location.search.split("=")[0] === "?page" ?
                                +location.search.split("=")[1] : NaN;    
    const pagesNum = Math.ceil(countriesAll.length / PER_PAGE);
    const countries = countriesAll.slice(PER_PAGE * (currentPage - 1), PER_PAGE * currentPage);   

    useEffect(() =>
    {
        if(window.scrollY !== 0)
            window.scrollTo({ top: 0 });
    }, [currentPage]);

    return {
        countries,        
        currentPage,
        pagesNum        
    };
};

// const pages = [...new Array(pagesNum).keys()];