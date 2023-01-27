import React from 'react';

const GetStarted = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-5 justify-items-center gap-5 my-24 h-48 '>
            <div className='text-center  text-start text-white'>
                <h2 className='text-3xl font-bold py-5'>Welcome To our campus</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem repellendus nesciunt nemo eveniet? Enim impedit odit cumque quae consequatur.</p>
            </div>
            <div>
                <label for="my-modal-3" class="btn btn-warning rounded-full w-48 hover:font-bold hover:text-white transition duration-1000 ease-in-out hover:bg-sky-700 border-0 my-10">Get Start</label>
                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box relative">
                        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
                        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default GetStarted;