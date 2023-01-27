import React from 'react';
import teacher1 from '../../image/tea-1.png';
import teacher2 from '../../image/tea-2.jpg';
import teacher3 from '../../image/tea-3.png';
import teacher4 from '../../image/tea-4.png';
import './Instructors.css';

const Instructors = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-start mx-10'>Our Skilled Instructors</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-100 my-10 p-10'>
                <div>
                    <div class="card w-84 bg-base-100 shadow-2xl">
                        <figure class="px-10 pt-10">
                            <img h-40 src={teacher3} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body  text-start">
                            <h2 class="card-title ">Imran Ahmed</h2>
                            <p>MERN Stack Developer</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card w-84 bg-base-100 shadow-2xl">
                        <figure class="px-10 pt-10">
                            <img h-40 src={teacher4} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body  text-start">
                            <h2 class="card-title">Mohammad Abdullah</h2>
                            <p>Front End Developer</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card w-84 bg-base-100 shadow-2xl">
                        <figure class="px-10 pt-10">
                            <img h-40 w-full src={teacher3} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body  text-start">
                            <h2 class="card-title">Mohammad Noman</h2>
                            <p>Back End Developer</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card w-84 bg-base-100 shadow-2xl">
                        <figure class="px-10 pt-10">
                            <img h-40 src={teacher4} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body  text-start">
                            <h2 class="card-title">Mohammad Kahid</h2>
                            <p>Full Stack Developer</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;