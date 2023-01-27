import React from 'react';

const Featured = () => {
    return (
        <div className='mx-w-full mx-auto'>
            <h2 className='text-2xl font-bold text-start ml-10 underline'>Featured Course</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10 cursor-pointer py-5 my-10'>
                <div class="card w-86 bg-base-100 shadow-xl hover:drop-shadow-2xl ">
                    <figure class="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">JavaScript Developer </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-warning w-40 rounded-full hover:outline">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-86 bg-base-100 shadow-xl hover:drop-shadow-2xl">
                    <figure class="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center hover:drop-shadow-2xl">
                        <h2 class="card-title">Python Developer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-warning w-40 rounded-full hover:outline">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-86 bg-base-100 shadow-xl hover:drop-shadow-2xl">
                    <figure class="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center hover:drop-shadow-2xl">
                        <h2 class="card-title">Java Developer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-warning w-40 rounded-full hover:outline">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-86 bg-base-100 shadow-xl hover:drop-shadow-2xl">
                    <figure class="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">C ++ Developer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-warning w-40 rounded-full hover:outline">Buy Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Featured;