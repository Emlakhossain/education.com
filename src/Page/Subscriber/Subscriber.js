import React from 'react';
import background from '../../image/banner-img.jpg';

const Subscriber = () => {
    return (
        <section>
            <div className={'glass grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto justify-items-center bg-gradient-to-r from-sky-500 to-indigo-500 my-20 text-white hover:text-black hover:bg-blue-900 hover:text-warning'}

            >
                <div className='flex py-20'>
                    <div>
                        <h1 className='font-bold text-5xl px-4'>50</h1>
                    </div>
                    <div>
                        <p>PROFESSIONAL</p>
                        <p>INSTRUCTORS</p>
                    </div>
                </div>
                <div className='flex py-20'>
                    <div>
                        <h1 className='font-bold text-5xl px-4'>87</h1>
                    </div>
                    <div>
                        <p>NEW COURSES EVERY </p>
                        <p>YEAR</p>
                    </div>
                </div>
                <div className='flex py-20'>
                    <div>
                        <h1 className='font-bold text-5xl px-4'>25</h1>
                    </div>
                    <div>
                        <p>LIVE SESSIONS EVERY </p>
                        <p>MONTHS</p>
                    </div>
                </div>
                <div className='flex py-20'>
                    <div>
                        <h1 className='font-bold text-5xl px-4'>277</h1>
                    </div>
                    <div>
                        <p>REGISTERED</p>
                        <p>STUDENTS</p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Subscriber;