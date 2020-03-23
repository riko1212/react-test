import React from 'react';

import './Button.css';

const Button = ({label}) => {
    return (<button className="btn custom-btn">{ label }</button> )
}

export default Button