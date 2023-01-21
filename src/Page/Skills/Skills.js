import React from 'react';

const Skills = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-start justify-items-center bg-blue-900 mx-10 h-24 content-center '>
                <div className='font-bold text-white p-2'>
                    <h4 className='font-bold text-white '>Scholarship Facility</h4>
                    <p>We have various scholarship Facility </p>
                </div>
                <div className='font-bold text-white border-l p-2'>
                    <h4>Skilled Lecturers</h4>
                    <p>Our campus have very skilled lecturers</p>
                </div>
                <div className='font-bold text-white border-l p-2'>
                    <h4>Book Library & Store</h4>
                    <p>All Kinds of book are available in library </p>
                </div>
            </div>
        </div>
    );
};

export default Skills;