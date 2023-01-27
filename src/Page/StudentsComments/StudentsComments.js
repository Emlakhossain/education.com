import React from 'react';
import image1 from '../../image/tea-1.png';

const StudentsComments = () => {
    return (
        <div className='my-20'>
            <h2 className='font-bold text-2xl text-center'>What's Our Students Say</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mx-10 my-10 '>
                <div class="card w-fit lg:card-side bg-base-200 shadow-xl p-2 ">
                    <figure><img height={200} src={image1} alt="Album" /></figure>
                    <div class="card-body text-start">
                        <h2 class="card-title ">Imran Ahmed</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat liber                      aliquam impedit dolor totam natus inventore modi similique ratione.</p>

                    </div>
                </div>
                <div class="card w-fit lg:card-side bg-base-200 shadow-xl p-2">
                    <figure><img height={200} src={image1} alt="Album" /></figure>
                    <div class="card-body text-start">
                        <h2 class="card-title">Mohammad Ahmed</h2>
                        <p>Front End Engineer</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quis, rerum inventore accusantium ipsam eius sunt quos? Exercitationem, esse nemo.</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default StudentsComments;