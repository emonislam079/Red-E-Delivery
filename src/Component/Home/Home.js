import React from 'react';
import Banner from './Banner/Banner';
import FastDelivery from './FastDelivery/FastDelivery';
import Traking from './Traking/Traking';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Traking></Traking>
            <FastDelivery></FastDelivery>
        </>
    );
};

export default Home;