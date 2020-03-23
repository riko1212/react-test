import React from 'react';
import HeadLogo from '../Header/Logo/Logo';
import Social from './Social/Social';

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" >
            <div className="container">
                <div className="footer-wrapp">
                    <HeadLogo />
                    <div className="copy">Copyright © Myapp, 2020. All rights reserved.</div>
                    <Social />
                </div>
            </div>
        </footer>
    )
}

export default Footer;