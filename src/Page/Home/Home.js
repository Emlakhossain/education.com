import React from 'react';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import Skills from '../Skills/Skills';
import WelcomePage from '../WelcomePage/WelcomePage';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <WelcomePage></WelcomePage>
            <Featured></Featured>
        </div>
    );
};

export default Home;