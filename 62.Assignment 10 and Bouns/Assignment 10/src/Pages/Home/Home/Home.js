import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Event from '../Event/Event';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Event></Event>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;