import React from 'react';
import Banner from './Banner/Banner';
import FastDelivery from './FastDelivery/FastDelivery';
import Review from './Review/Review';
import Traking from './Traking/Traking';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Traking></Traking>
            <FastDelivery></FastDelivery>
            <Review></Review>
        </>
    );
};

export default Home;