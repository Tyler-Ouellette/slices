import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
    margin-bottom: 3rem;
    
    .logo {
        transform: translateY(-25%);
    }
    ul {
        margin: 0;
        margin-top: -6rem;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
        grid-gap: 2rem;
        list-style: none;
        text-align: center;
        align-items: center;
    }
    a {
        font-size: 3rem;
        text-decoration: none;
        &::hover {
            color: var(--red);
        }
        &[aria-current="page"]{
            color: var(--red);
        }
    }
`;

export default function Nav() {
    return <NavStyles>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pizzas">Pizza Menu</Link></li>
            <li><Logo/></li>
            <li><Link to="/slicemasters">Slice Masters</Link></li>
            <li><Link to="/order">Orders</Link></li>
        </ul>
    </NavStyles>
}
