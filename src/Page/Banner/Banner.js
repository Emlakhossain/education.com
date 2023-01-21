import React from 'react';

const Banner = () => {
    return (
        <div class="carousel h-96 w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img src="https://static-cse.canva.com/blob/785768/Canvastudentsbanner.png" class="w-full" />

                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <div className='text-white'>
                        <h1 className='text-success font-bold text-4xl'>text me</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, illo?</p>
                        <button className='btn btn-warning'>Register...</button>
                    </div>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src="https://www.ucc.ie/en/media/studyatucc/undergrads/firstyearstudents/banner_group_study-1920x550.jpg" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img src="https://imageio.forbes.com/specials-images/imageserve/5e020def4e2917000783d582/0x0.jpg?format=jpg&width=1200" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
                <img src="https://connect-assets.prosple.com/cdn/ff/KIURp6SVMAyPdZH3-ui3ycbxkta0s53Y52bRae7N1-o/1657705140/public/2022-07/banner-unimelb-grad-school-1786x642-2022.png" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;