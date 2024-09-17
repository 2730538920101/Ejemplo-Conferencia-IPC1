import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Realizar Post</Link></li>
                <li><Link to="/list">Realizar Get</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
