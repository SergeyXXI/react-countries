import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Country from "./pages/CountryPage";
import NotFound from "./pages/NotFound";

const Main = styled.main``;

const Container = styled.div`
    max-width: 1440px;
    padding: 0 1rem;
    margin: 0 auto;
`;

export default function App()
{    
    return (
        <>
            <Header />
            <Main>
                <Container>                    
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/countries/:name" element={<Country />} /> 
                        <Route path="*" element={<NotFound />} />                       
                    </Routes>                                      
                </Container>
            </Main>
        </>
    );
}