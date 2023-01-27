import React from 'react';
import AskedQuestion from '../AskedQuestion/AskedQuestion';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import GetStarted from '../GetStarted/GetStarted';
import Instructors from '../Instructors/Instructors';
import Skills from '../Skills/Skills';
import StudentsComments from '../StudentsComments/StudentsComments';
import Subscriber from '../Subscriber/Subscriber';
import Toast from '../Toast/Toast';
import WelcomePage from '../WelcomePage/WelcomePage';

const Home = () => {
    return (
        <div>
            <Toast></Toast>
            <Banner></Banner>
            <Skills></Skills>
            <WelcomePage></WelcomePage>
            <Featured></Featured>
            <GetStarted></GetStarted>
            <Instructors></Instructors>
            <AskedQuestion></AskedQuestion>
            <Subscriber></Subscriber>
            <StudentsComments></StudentsComments>
        </div>
    );
};

export default Home;