import React from 'react'

function Header() {
    return (
        <header style={headerStyles}>
            <h1>Todos List</h1>
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

export default Header;