import React from 'react';
import Cards from './Cards/Cards';
import SectionTitle from './SectionTitle/SectionTitle'

import './MainSection.css';

const MainSection = () => {
    return (
        <section className="main-section">
            <div className="container">
                <SectionTitle label="What We Do"/>
                <Cards />
            </div>
        </section>
    )
}

export default MainSection