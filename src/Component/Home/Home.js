import React from 'react';
import Connect from '../Connect/Connect';
import Banner from './Banner/Banner';
import FastDelivery from './FastDelivery/FastDelivery';
import Offers from './Offers/Offers';
import Review from './Review/Review';
import Traking from './Traking/Traking';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Traking></Traking>
            <Offers></Offers>
            <FastDelivery></FastDelivery>
            <Review></Review>
            <Connect></Connect>
            
        </>
    );
};

export default Home;