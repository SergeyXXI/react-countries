import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style: none;    
    padding: 0;
    margin: 1.5rem 0 1rem;
`;

const Item = styled.li`
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

export default function Pagination({ num, current })
{
    const items = formPages(num, current);    

    return (
        <List>{items}</List>
    );
}

function formPages(num, currentPage)
{
    if(num <= 1 || !currentPage) return [];

    const result = [];
    let isCollapsed = false;
    let isCollapsedTwo = false;

    const addItem = (page, options = {}) =>
    {         
        const {
            isCurrent = false,          
            isLink = false,
            key = ""
        } = options;

        result.push(
            isLink ?                
                <Item key={page+key}>
                    <PageLink to={page === 1 ? "/react-countries" : `?page=${page}`}>
                        {page}
                    </PageLink>
                </Item> :
                <Item key={page+key} isCurrent={isCurrent} noLink>
                    <span>{page}</span>
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