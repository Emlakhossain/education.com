import React from 'react';
import './Pricing.css';
import image1 from '../../image/tea-1.png'

const Pricing = () => {
    return (
        <div className='font-poppins bg-dark_purple text-white mt-20'>
            <h5 className='text-heading_color pt-5'>Pricing</h5>
            <h4 className='font-bold text-2xl mb-12'>Read what Others what You Say</h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-8 py-8 group'>
                <div className='bg-white/10 group-hover:blur-sm  hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer  p-8 rounded-xl mix-blend-luminosity'>
                    <img src={image1} alt="" className='h-20 mx-auto rounded' />
                    <h4 className='uppercase tex-xl font-bold'>Imran ahmed </h4>
                    <p className='text-sm leading-7 my-3 font-light opacity-50 px-2 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquid provident omnis
                        placeat temporibus quibusdam eius earum blanditiis numquam dolorum.</p>
                    <p>Price: $1000</p>
                    <button className='btn btn-warning py-2.5 px-8 rounded-full my-4'>Get in Touch</button>
                </div>
                <div className='bg-white/10 group-hover:blur-sm  hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl mix-blend-luminosity'>
                    <img src={image1} alt="" className='h-20 mx-auto rounded' />
                    <h4 className='uppercase tex-xl font-bold'>Imran ahmed </h4>
                    <p className='text-sm leading-7 my-3 font-light opacity-50 px-2 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquid provident omnis
                        placeat temporibus quibusdam eius earum blanditiis numquam dolorum.</p>
                    <p>Price: $1000</p>
                    <button className='btn btn-warning py-2.5 px-8 rounded-full my-4'>Get in Touch</button>
                </div>
                <div className='bg-white/10 group-hover:blur-sm  hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl mix-blend-luminosity'>
                    <img src={image1} alt="" className='h-20 mx-auto rounded' />
                    <h4 className='uppercase tex-xl font-bold'>Imran ahmed </h4>
                    <p className='text-sm leading-7 my-3 font-light opacity-50 px-2 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquid provident omnis
                        placeat temporibus quibusdam eius earum blanditiis numquam dolorum.</p>
                    <p>Price: $1000</p>
                    <button className='btn btn-warning py-2.5 px-8 rounded-full my-4'>Get in Touch</button>
                </div>

            </div>
        </div>
    );
};

export default Pricing;