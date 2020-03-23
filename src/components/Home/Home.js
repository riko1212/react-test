import React from 'react';
//import Header from '../Header/Header';
//import Footer from '../Footer/Footer';
import MainSection from '../Home/MainSection/MainSection.js';
import Button from './Button/Button';

import './Home.css';



const Home = () => {
    return (
        <div>
            
            <section className="top-section">
                <div className="container">
                    <h1>
                        <span className="small-text">we are creating some new <span>things</span></span>
                        <span className="bigger-text">all over the world</span>
                    </h1>
                    <Button label="Learn More"/> 
                </div>
            </section>
            <MainSection />
            
        </div>
        

    )
}

export default Home