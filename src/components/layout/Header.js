import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyles}>
            <h1>Todos List</h1>
            <Link style={linkStyle} to="/">Home</Link> | 
            <Link style={linkStyle} to="/about">About</Link> | 
            <Link style={linkStyle} to="/contact">Contact</Link>
        </header>
    )
}

const headerStyles = {
    color: "#fff",
    background: '#000',
    textAlign: 'center',
    padding: '10px',
    margin: '0px'
};

const linkStyle = {
    color: '#fff',
    padding: '5px 6px'
};


export default Header;