import React from 'react';
import image from '../../image/img-1.png';

const AskedQuestion = () => {
    return (
        <>
            <h2 className='text-2xl font-bold text-center my-20'>Frequently Asked Questions</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto mb-20'>
                <div>
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-start mx-5">
                        <div class="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-start mx-5">
                        <div class="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-start mx-5">
                        <div class="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-start mx-5">
                        <div class="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>

                </div>
                <div className='grid justify-items-center -mt-10 mx-5'>
                    <img src={image} alt="" />
                </div>

            </div>
        </>
    );
};

export default AskedQuestion;