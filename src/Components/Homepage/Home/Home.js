import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Specialists from '../Specialists/Specialists';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Specialists></Specialists>
            <Footer></Footer>
        </div>
    );
};

export default Home;