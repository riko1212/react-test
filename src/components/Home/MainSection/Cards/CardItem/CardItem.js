import React from 'react';
import Button from '../../../Button/Button';

import './CardItem.css';

const CardItem = ({label}) => {
    return (
        <div className="col-lg-4">
            <div className="card-item">
                <div className="card-img"></div>
                <div className="card-title">{ label }</div>
                <Button label="More"/> 
            </div>
        </div>
    )
}

export default CardItem