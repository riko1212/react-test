import React from 'react';

import HeadLogo from './Logo/Logo';
import MenuList from './Menu/Menu';

import './Header.css';



const Header = () => {
    
    return(
        <header className="topHeader">
            <div className="container">
                <div className="row" >
                    <div className="col-md-3">
                        <HeadLogo />
                    </div>
                    <div className="col-md-4 offset-md-5 d-flex align-items-center">
                        <MenuList />
                    </div>
                    
                    
                </div>
            </div>
        </header>
    );
};

export default Header