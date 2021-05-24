import React from 'react';
import 'normalize.css'
import styled from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';
import stripes from '../assets/images/stripes.svg'

const ContentStyles = styled.div`
    display: grid;
    margin: 0;
    background-color: white;
    padding: 2rem;
`;

const SiteBorderStyles = styled.div`
    max-width: 1000px;
    margin: 12rem auto 4rem auto;
    // Scales with the Logo
    margin-top: clamp(2rem, 10vw, 12rem);
    background: white url(${stripes});
    background-size: 1500px;
    border: 5px solid white;
    padding: 0.5rem;
    // For new Browsers
    padding: clamp(5px, 1vw, 25px);
    box-shadow: 0 0 5px 3px rgba(0,0,0,0.05);

    @media(max-width: 1100px) {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
`;

export default function Layout({children}){
    return <>
        <GlobalStyles />
        <SiteBorderStyles>
            <ContentStyles>
                <Nav />
                {children}
                <Footer />       
            </ContentStyles>
        </SiteBorderStyles>
    </>
}