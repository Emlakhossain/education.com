import React from 'react';

const Skills = () => {
    return (
        <>
            <div className='flex flex-wrap md:flex-2 lg:flex-3 gap-4 text-start justify-center bg-blue-900 mx-10  content-center py-5 '>
                <div className='font-bold text-white p-2 '>
                    <h4 className='font-bold text-white '>Scholarship Facility</h4>
                    <p>We have various scholarship Facility </p>
                </div>
                <div className='font-bold text-white border-l p-2 '>
                    <h4>Skilled Lecturers</h4>
                    <p>Our campus have very skilled lecturers</p>
                </div>
                <div className='font-bold text-white border-l p-2'>
                    <h4>Book Library & Store</h4>
                    <p>All Kinds of book are available in library </p>
                </div>
            </div>
        </>
    );
};

export default Skills;