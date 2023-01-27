import React from 'react';
import logo1 from '../../image/logo/logo1.png';
import logo2 from '../../image/logo/logo2.png';
import logo3 from '../../image/logo/logo3.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-20 justify-items-center'>

            <div>
                <img className='logo' src={logo3} alt="" />
            </div>
            <div>
                <img className='logo' src={logo3} alt="" />
            </div>
            <div>
                <img className='logo' src={logo3} alt="" />
            </div>
            <div>
                <img className='logo' src={logo3} alt="" />
            </div>
        </div>
    );
};

export default Logo;