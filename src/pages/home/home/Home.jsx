import React, { useContext } from 'react';
import Banner from '../banner/Banner';
import { AuthContext } from '../../../provider/AuthProvider';
import BestInstructor from '../bestInstructor/BestInstructor';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {

    

    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <BestInstructor></BestInstructor>
        </div>
    );
};

export default Home;