import React from 'react';
import image from '../../image/img-1.png';

const AskedQuestion = () => {
    return (
        <>
            <h2 className='text-2xl font-bold text-center my-20'>Frequently Asked Questions</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto mb-20 py-10'>
                <div>
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-start mx-5">
                        <div class="collapse-title text-xl font-medium">
                            What's our campus benefits?
                        </div>
                        <div class="collapse-content">
                            <p>We are providing best and good Environments and politics free educational systems.</p>
                        </div>
                    </div>
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-start mx-5">
                        <div class="collapse-title text-xl font-medium">
                            Do you have scholarship policy on your campus?
                        </div>
                        <div class="collapse-content">
                            <p>Yes,we have various type of scholarship policy for own and forin country students.</p>
                        </div>
                    </div>
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-start mx-5">
                        <div class="collapse-title text-xl font-medium">
                            Do you have PHD degree facilities on your campus?
                        </div>
                        <div class="collapse-content">
                            <p>Yes we have Phd degree course in our campus. and also we have facilities on teach our campus.</p>
                        </div>
                    </div>
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-start mx-5">
                        <div class="collapse-title text-xl font-medium">
                            Why students will admitted on your campus ?
                        </div>
                        <div class="collapse-content">
                            <p>Because of we are totally ensure educational environments and we will help to improve your self that's why we are on of the most favorite for you.</p>
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