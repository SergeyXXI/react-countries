import { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type PaginationProps = 
{
    num: number,
    current: number
};

type PaginationItemProps = 
{
    isCurrent?: boolean,
    noLink?: boolean
};

type addItemOptions =
{
    isCurrent?: boolean,
    isLink?: boolean,
    key?: string    
};

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style: none;    
    padding: 0;
    margin: 1.5rem 0 1rem;
`;

const Item = styled.li<PaginationItemProps>`
    display: flex;
    
    & > span
    {
        display: flex;
        width: 2.25rem;
        height: 2.25rem; 
        justify-content: center;        
        align-items: center;         
    }  

    ${({ isCurrent, noLink }) => isCurrent ?
        `        
            padding: .25rem;              

            & > span
            {                             
                background: var(--color-ui);
                border-radius: 50%;
                box-shadow: var(--shadow);
            }           
        ` :
        noLink ? "padding: .25rem; opacity: .4;" : ""
    }   
`;

const PageLink = styled(Link)`
    display: flex;
    width: 2.25rem;
    height: 2.25rem;
    justify-content: center;
    align-items: center;
    color: inherit;
    text-decoration: none;
    padding: .25rem; 
`;

export default function Pagination({ num, current }: PaginationProps)
{
    const items = formPages(num, current);    

    return (
        <List>{items}</List>
    );
}
function formPages(num: number, currentPage: number)
{
    if(num <= 1 || !currentPage) return [];

    const result: ReactNode[] = [];
    let isCollapsed = false;
    let isCollapsedTwo = false;

    const addItem = (value: number | string, options: addItemOptions = {}) =>
    {         
        const {
            isCurrent = false,          
            isLink = false,
            key = ""
        } = options;

        result.push(
            isLink ?                
                <Item key={value+key}>
                    <PageLink to={value === 1 ? "/" : `?page=${value}`}>
                        {value}
                    </PageLink>
                </Item> :
                <Item key={value+key} isCurrent={isCurrent} noLink>
                    <span>{value}</span>
                </Item>
        );
    };    

    for(let page = 1; page <= num; page++)
    {
        if(num >= 11) 
        {
            if(page > 2 && page < num - 1) 
            {     
                if(currentPage < 7)
                {
                    if(page > 5 && num - (currentPage + 2) > 3)
                    {
                        if(isCollapsed) continue;

                        if(page > currentPage + 2)
                        {
                            isCollapsed = true;
                            addItem("...");
                            continue;
                        } 
                    }                   

                }
                else if(currentPage > num - 6)
                {
                    if(page <= num - 5 && page < currentPage - 2)
                    {
                        if(isCollapsed) continue;

                        if(page < currentPage - 2)
                        {
                            isCollapsed = true;
                            addItem("...");
                            continue;
                        } 
                    }                    
                }
                else
                {
                    if(isCollapsed && isCollapsedTwo) continue;

                    if(page < currentPage - 2 && isCollapsed) continue;

                    if(page < currentPage - 2)
                    {                        
                        isCollapsed = true;
                        addItem("...");
                        continue;
                    }                    

                    if(page > currentPage + 2)
                    {                        
                        isCollapsedTwo = true;
                        addItem("...", { key: "two" });
                        continue;
                    }   
                }              
                                        
            }             
        }
        
        page === currentPage ? addItem(page, { isCurrent: true }) : 
                                addItem(page, { isLink: true });         
    }  

    return result;
}