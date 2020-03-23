import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const MenuList = () => {
    return (
        <ul className="menu-list">
            <li className="menu-list-item"><Link to="/">Home</Link></li>
            <li className="menu-list-item"><Link to="/news">News</Link></li>
            <li className="menu-list-item"><Link to="/profile">Profile</Link></li>
            
        </ul> 
    )
}

export default MenuList;