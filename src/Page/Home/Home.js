import React from 'react';
import AskedQuestion from '../AskedQuestion/AskedQuestion';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import GetStarted from '../GetStarted/GetStarted';
import Skills from '../Skills/Skills';
import WelcomePage from '../WelcomePage/WelcomePage';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <WelcomePage></WelcomePage>
            <Featured></Featured>
            <GetStarted></GetStarted>
            <AskedQuestion></AskedQuestion>
        </div>
    );
};

export default Home;