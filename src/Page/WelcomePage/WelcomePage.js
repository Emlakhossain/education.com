import React from 'react';


const WelcomePage = () => {
    return (
        <div>
            <div class="">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center my-20 ">

                    <div className='text-start pl-10  items-center'>
                        <h1 class="text-5xl font-bold">Welcome To Our Campus</h1>
                        <p class="py-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, voluptatibus odit quia voluptas error blanditiis quod maiores molestias sunt esse quae, aliquam delectus. Doloribus officiis omnis qui repellendus nobis sit nisi eligendi, facere ea magni quo hic culpa possimus? Quibusdam?</p>
                        <button class="btn btn-warning rounded-full w-48 hover:font-bold hover:text-white transition duration-1000 ease-in-out hover:bg-sky-700 border-0">Get Started</button>
                    </div>
                    <div >
                        <img src="https://www.intedashboard.com/hubfs/InteDashboard_Sep2021/images/Group%203703%20(1).png" class="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;