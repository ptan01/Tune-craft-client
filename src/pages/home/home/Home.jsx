import React, { useContext } from 'react';
import Banner from '../banner/Banner';
import { AuthContext } from '../../../provider/AuthProvider';
import BestInstructor from '../bestInstructor/BestInstructor';
import PopularClasses from '../PopularClasses/PopularClasses';
import InstrumentMaintenance from '../instrumentMaintenance/InstrumentMaintenance';

const Home = () => {

    

    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <BestInstructor></BestInstructor>
            <InstrumentMaintenance></InstrumentMaintenance>
        </div>
    );
};

export default Home;