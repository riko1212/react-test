import React from 'react';

import './Logo.css';
import { Link } from 'react-router-dom';

const HeadLogo = () => {
    return (
        // eslint-disable-next-line
        <div className="header-logo"><Link to="/">MyApp</Link></div>
    )
}

export default HeadLogo