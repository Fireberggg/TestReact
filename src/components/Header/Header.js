import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='header__primary'> <h1>Star DB</h1> </Link>
            <ul className="nav nav-tabs header__list">
                <li className="header__list_item">
                    <Link className="nav-link nav-item" to='/people/'>People</Link>  
                </li>
                <li className="header__list_item">
                    <Link className="nav-link nav-item" to='/planets/'>Planets</Link>  
                </li>
                <li className="header__list_item">
                    <Link className="nav-link nav-item" to='/starships/'>Starships</Link>  
                </li>
            </ul>
        </div>
    )
}

export default Header;
