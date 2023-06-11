import React, { useContext } from 'react';
import Banner from '../banner/Banner';
import { AuthContext } from '../../../provider/AuthProvider';
import BestInstructor from '../bestInstructor/BestInstructor';

const Home = () => {

    

    return (
        <div>
            <Banner></Banner>
            <BestInstructor></BestInstructor>
        </div>
    );
};

export default Home;