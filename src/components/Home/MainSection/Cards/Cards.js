import React from 'react';
import CardItem from './CardItem/CardItem'

import './Cards';

const Cards = () => {
    return (
        <div className="row">
            <CardItem label="We are working hard"/>
            <CardItem label="We are resting legendary"/>
            <CardItem label="We are plaing as the last"/>
        </div>
    )
}

export default Cards